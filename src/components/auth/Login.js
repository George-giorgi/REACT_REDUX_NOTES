import "./Register.scss"
import {Link} from "react-router-dom"
import {Log_request} from "../../actions/RegAction"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

export default function Login({back}) {
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
                <h2>{back == "Successful registration"? <Link onClick={()=>window.location.reload()} to ="/">go to home</Link> : "login"}</h2>
                    <input 
                    type = "email"
                    placeholder ="enter your email..."
                    autoFocus
                    />
                    <input
                    type = "password"
                    placeholder ="enter your password..."
                    />
                    <p className = "error">{}</p>
                    <button type = "submit">
                    submit
                    </button>
                </div> 
            </form>
        </div>
    )
}