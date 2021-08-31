import "./about_note.scss"
import {useState} from 'react'
import { useSelector ,useDispatch } from "react-redux"
import axios from "axios"

import {Filter_Notes} from './filternotes/Filter_Notes'

import {delete_notes, cahngeImportant, forUpdate} from '../actions/adDelup'


const NOTE = ({note, id})=>{
    const [update, setupdate] = useState(false)
    
    const [text_changeFup , settext_changeFup] = useState('')
    const notes = useSelector(state => state.notes)
    
    
    const dispatch = useDispatch()
    const handleDeleteclick = async ()=>{

        dispatch(delete_notes(id))
        const find_del_note = notes.find(m=>m.id == id)
        
        const del_note = {
            time: find_del_note.time,
            user: localStorage.getItem("user")
        }
        await axios.delete("/note", {data: del_note})

    }
    const changeImportantClick = () =>{
        
        dispatch(cahngeImportant(id))
    }

    const  handleInpupdate =(event)=>{
        settext_changeFup(event.target.value)
    }

    const handleUpdate = (event) =>{
        
        if(event.target.value == "save"){
            const content = {
                id: note.id,
                content : text_changeFup,
                important: "noneimportant",
                time : new Date().toLocaleString()
            }
            dispatch(forUpdate(content))
        }
        setupdate(!update)
    }

    return(
        <div className ="about_note">
            {
                update? <p><input onChange ={handleInpupdate} className ="update_input" placeholder ="enter note" autoFocus /></p> 
                : <p>{note.content}</p>
            }
            <p onClick ={changeImportantClick}>{note.important? "important" : "noneimportant"}</p>
            <p>{note.time}</p>
            <p>
            <input className = {update? "onchange":"update_but" }
                type ="button" value ={update? "save" : "update"} 
                onClick = {handleUpdate}
            />
            <input className ="update_but" type ="button" value ="delete" 
            onClick = {handleDeleteclick}
            />
            </p>
        </div>
    )
}


export default function Render_Notes() {

    const notes = useSelector(state => {
        if ( state.condition === 'ALL' ) {
          return state.notes
        }
        return state.condition  === 'important' 
          ? state.notes.filter(note => note.important)
          : state.notes.filter(note => !note.important)
      })
    const Logaut = async() =>{
        localStorage.removeItem("user")
        window.location.reload()
        await axios.get("/logaut")
    }
    
    return (
        <>  
            <button onClick ={Logaut} className = "logaut">Logaut</button>
            <Filter_Notes
            notes = {notes}
            />
            {
                notes.map((note)=>{
                    return(
                        <NOTE 
                         key = {note.id}
                         note ={note}
                         id = {note.id}
                        />
                    )
                    
                })
            }
            
        </>
    )
}
