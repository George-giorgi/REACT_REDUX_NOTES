import "./about_note.scss"
import {useState, useEffect} from 'react'
import { useSelector ,useDispatch } from "react-redux"
import axios from "axios"

import {Filter_Notes} from './filternotes/Filter_Notes'

import {delete_notes, cahngeImportant, forUpdate, get_all} from '../actions/adDelup'
import Weather from "./weather/Weather"


const NOTE = ({note, id})=>{
    const [update, setupdate] = useState(false)
    const [text_changeFup , settext_changeFup] = useState('')
    const notes = useSelector(state => state.notes)
    const changed_theme = useSelector(state => state.theme)
    
    
  
    const dispatch = useDispatch()
    const handleDeleteclick = async ()=>{

        dispatch(delete_notes(id))

        const find_del_note = notes.find(m=>m.id === id)
        
        const del_note = {

            time: find_del_note.time,
            user: localStorage.getItem("user")
        }
        await axios.delete("/note", {data: del_note})

    }
    const changeImportantClick = async () =>{
        const find_note_for_update = notes.find(m=> m.id === id)
        
        if(find_note_for_update.important === "NOT"){

            const update_important = {
                user: localStorage.getItem("user"),
                old_time: find_note_for_update.time,
                time: new Date().toLocaleString(),
                important: "YES",
                polimorfizm: "changeImportant",
                content: find_note_for_update.content
            }
            dispatch(cahngeImportant(id))
            await axios.put("/note", update_important)
        }
        else if(find_note_for_update.important === "YES"){
            const update_important = {

                user: localStorage.getItem("user"),
                old_time: find_note_for_update.time,
                time: new Date().toLocaleString(),
                important: "NOT",
                polimorfizm: "changeImportant",
                content: find_note_for_update.content
            }
            dispatch(cahngeImportant(id))
            await axios.put("/note", update_important)
        }
        
    }

    const  handleInpupdate =(event)=>{

        settext_changeFup(event.target.value)
    }
    
    const handleUpdate = async (event) =>{
        setupdate(!update)
        if(event.target.value === "save"){
            const content = {
                id: note.id,
                content : text_changeFup,
                important: "noneimportant",
                time : new Date().toLocaleString()
            }
            dispatch(forUpdate(content))
        }
        if(event.target.value === "save"){

            const find_note_for_update = notes.find(m=>m.id === id)
           
            const update_important = {

                user: localStorage.getItem("user"),
                old_time: find_note_for_update.time,
                content: text_changeFup,
                time:new Date().toLocaleString(),
                important: find_note_for_update.important,
                polimorfizm: "changeContent", 
            }
            
            await axios.put("/note", update_important)
        }
    }
  
    const iportant_condition = (value, funcHandle)=>{

        if (value === "NOT"){

            return(
                <>
                <p onClick ={funcHandle} className ="noneimportant"> 
                   noneimportant</p>
                <p className="time">{note.time}</p>
                </>
            )
        }
        else if(value === "YES"){

            return(
                <>
                <p onClick ={funcHandle} className ="important"> 
                   important</p>
                <p className ="time">{note.time}</p>
                </>
            )
        }
    }

    return(
        <div className ="about_note">
            {
                update? <p><input onChange ={handleInpupdate} className ="update_input" placeholder ="enter note" autoFocus /></p> 
                : <p style = {changed_theme ? {color:"white"} : {}} >{note.content}</p>
            }
            {
               iportant_condition(note.important, changeImportantClick ) 
            }
            
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
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)
    const notes = useSelector(state => {
        if ( state.condition === 'ALL' ) {
          return state.notes
        }
        return state.condition  === 'important' 
          ? state.notes.filter(note => note.important === "YES")
          : state.notes.filter(note => note.important=== "NOT")
      })
    
    const Logaut = async() =>{

        localStorage.removeItem("user")
        window.location.reload()
        await axios.get("/logaut")
    }
    useEffect(()=>{
        const fetch_data = async() => {
            const responce = await axios.get("/note", {params:{user:localStorage.getItem("user")}})
            
            dispatch(get_all(responce.data))
        }
        fetch_data()
    },[])

    
    return (
        <>  
            <button  onClick ={Logaut} className = "logaut">Logaut</button>
            
            <Weather />
            <Filter_Notes
            notes = {notes}
            />
            {
                notes.length == 0 ? ". . . . . . . ":
                
                    notes.map((note,i)=>{
                      
                        return(
                            <NOTE 
                             key = {i}
                             note ={note}
                             id = {note.id}
                            />
                        )
                        
                    })
                
            }
            
            
        </>
    )
}
