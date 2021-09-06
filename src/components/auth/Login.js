import "./Register.scss"
import {Link} from "react-router-dom"
import {Log_request} from "../../actions/RegAction"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

export default function Login({back}) {
    const current_state = useSelector(state=>state.responce)
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const email = event.target[0].value
        const password = event.target[1].value
        const body = {
            email: email,
            password: password
        }
        const responce = await Log_request(body)
        dispatch(
            {
                type: "log_request",
                data: responce
            }
        )
        history.push("/notes")
    }
  

    return (
        <div className = "main_reg">
             
            <form onSubmit = {handleSubmit}>
                <div className = "reg_wraper">
                <h2 className ="reg_log">{back === "Successful registration"? <Link className ="link" onClick={()=>window.location.reload()} to ="/">go to register</Link> : "login"}</h2>
                    <input
                    className ="form_style" 
                    type = "email"
                    placeholder ="enter your email..."
                    autoFocus
                    />
                    <input
                    className ="form_style" 
                    type = "password"
                    placeholder ="enter your password..."
                    />
                    <p className = "error">{
                        current_state.valid !== "register" && current_state.reps
                    }</p>
                    <button  type = "submit">
                    submit
                    </button>
                </div> 
            </form>
        </div>
    )
}