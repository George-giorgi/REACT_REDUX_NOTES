import {Add_note} from "../../actions/adDelup"
import {useDispatch, useSelector } from "react-redux"
import axios from "axios"

const Filter_Notes = ({notes})=>{
    
    
    const dispatch = useDispatch()

    const handleValue = async (event)=>{
        event.preventDefault()
        const content = {
            id: notes.length+1,
            content: event.target[0].value,
            important: false,
            time : new Date().toLocaleString()
        }
        const body = {
            user_email: localStorage.getItem("user"),
            note: event.target[0].value,
            insert_time: new Date().toLocaleString(),
            important: "NO"
        }
        event.target[0].value = ""
        dispatch(Add_note(content))
        await axios.post("/note", body)
    }

    return(
        <>
        <form onSubmit = {handleValue}>
            <input className ="add_note_inp" placeholder ="write note" 
             autoFocus
            />
            <input className ="add_note_but" type = "submit" value= "add note"
            
            />
        </form>
            <div className ="radio">
                All<input onChange = {()=> dispatch({type: "ALL"})} type ="radio" name ="choose" />
                important<input onChange = {()=> dispatch({type: "important"})} type ="radio" name ="choose"  />
                noneimportant<input onChange = {()=> dispatch({type: "nonimportant"})} type ="radio" name ="choose" />
            </div>
        </>
        
    )
}

export { Filter_Notes }