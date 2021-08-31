import "./Register.scss"
import {useDispatch, useSelector} from "react-redux"
import {Reg_requst} from "../../actions/RegAction"

export default function Register() {
    const current_state = useSelector(state=>state.responce)
   
    const dispatch = useDispatch()
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const name = event.target[0].value
        const email = event.target[1].value
        const password = event.target[2].value
        const body = {
            name: name,
            email: email,
            password: password
        }
        const responce = await Reg_requst(body)
        dispatch(
            {
                type: "reg_request",
                data: responce
            }
        )
       
    }
    const style = {
        // textDecoration: "none",
        cursor: "pointer",
        color:"grey"
    }
    return (
        <div className = "main_reg">
            
            <form onSubmit = {handleSubmit}>
                <div className = "reg_wraper">
                    <h2>registracion</h2>
                    <input
                    type = "text"
                    placeholder ="enter your name..."
                    autoFocus 
                    />
                    <input 
                    type = "email"
                    placeholder ="enter your email..."
                    />
                    <input
                    type = "password"
                    placeholder ="enter your password..."
                    />
                    <p className = "error">{
                    current_state != "Successful registration" && current_state == "object Object"? `${current_state}` : ""
                    }</p>
                    <button type = "submit">
                    submit
                    </button>
                </div> 
            </form>
        </div>
    )
}
