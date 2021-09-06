
import {useDispatch, useSelector} from "react-redux"



export default function Theme() {
    
    const dispatch = useDispatch()
    const theme_cont = useSelector(state => state.theme)

    const handleClick = () =>{
        dispatch({
            type: "change_theme"
        })
        if(theme_cont == false){
            document.body.classList.add("themeE")
        }else{
            document.body.classList.remove("themeE")
        }
        
    }
    

    return (
        <div className ="theme" onClick ={handleClick} >
          Change Theme
        </div>
    )
}
