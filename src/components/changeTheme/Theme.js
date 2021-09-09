
import {useDispatch, useSelector} from "react-redux"



export default function Theme() {
    
    const dispatch = useDispatch()
    const theme_cont = useSelector(state => state.theme)

    const handleClick = () =>{
        dispatch(
            {
                type: "change_theme"
            }
        )
        if(theme_cont === false){
            document.body.classList.add("themeE")
            localStorage.setItem("theme", "dark")
        }else if(theme_cont === true){
            document.body.classList.remove("themeE")
            localStorage.setItem("theme", "light")
        }
        
    }
   
    

    return (
        <div style={theme_cont? {color :"white", backgroundColor: "#F6D167"}: {backgroundColor: "black"}} className ="theme" onClick ={handleClick} >
          Change Theme
        </div>
    )
}
