import {Add_note} from "../../actions/adDelup"
import {useDispatch } from "react-redux"
import axios from "axios"

const Filter_Notes = ({notes})=>{
  
    const dispatch = useDispatch()
    
    const handleValue = async (event)=>{
        event.preventDefault()
        const content = {
            id: notes.length+1,
            content: event.target[0].value,
            important: "NOT",
            time : new Date().toLocaleString()
        }
        const body = {
            user_email: localStorage.getItem("user"),
            note: event.target[0].value,
            insert_time: new Date().toLocaleString(),
            important: "NOT"
        }
       
        event.target[0].value = ""
        dispatch(Add_note(content))
        await axios.post("/note", body)
    }
    
    return(
        <>
        <form className="for_responsive" onSubmit = {handleValue}>
            <input  className ="add_note_inp" placeholder ="write note" 
             autoFocus
            />
            <input className ="add_note_button" type = "submit" value= "add note"
            
            />
        </form>
            <div className ="radio">
               
               <span  className ="radio_all"><label style={{cursor:"pointer"}} htmlFor="some1">All</label></span>
               <input style={{cursor:"pointer"}} id="some1" onChange = {()=> dispatch({type: "ALL"})} type ="radio" name ="choose" />
              
               <span className ="radio_important"><label style={{cursor:"pointer"}} htmlFor="some2">important</label></span>
               <input style={{cursor:"pointer"}} id="some2" onChange = {()=> dispatch({type: "important"})} type ="radio" name ="choose"  />
               
               <span className ="radio_noneimportant"><label style={{cursor:"pointer"}} htmlFor="some3">noneimportant</label></span>
               <input style={{cursor:"pointer"}} id="some3" onChange = {()=> dispatch({type: "nonimportant"})} type ="radio" name ="choose" />
            </div>
        </>
        
    )
}

export { Filter_Notes }