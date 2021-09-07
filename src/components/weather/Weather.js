import "./weather.scss"
import {useEffect, useState} from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import Svg from "./svg/Svg"
import {Link} from "react-router-dom"



export default function Weather() {
    const [value, setvalue] = useState("Tbilisi")
    
    const dispatch = useDispatch()
    
    const one_wheather = useSelector(state => state.wheather)
    const changed_theme = useSelector(state => state.theme)
    const wheather_city = one_wheather.filter(item => item.city === value )
    
    useEffect(()=>{
       const req = async()=>{
        const responce = await axios.get("/wheather")
            dispatch(
                {
                    type: "get_all_wheather",
                    data: responce.data
                }
            )
        }
        req()
    },[])

    return (
        
        <div className = "wheather">
             <Svg sky= {wheather_city.length >0 ? wheather_city[0].sky : ""} />
            <div className = "current_wheather">
                <p style={{marginBottom: "3px"}}> <span style ={{color: "#297F87"}}>temp:</span> {wheather_city.length >0 ? wheather_city[0].temp : ""} </p>
                <p><span style ={{color: "#297F87"}}>sky:</span> {wheather_city.length >0 ? wheather_city[0].sky : ""}</p>
            </div>
            
            <select className = {changed_theme?"select changeTheme" : "select" } value= {value} onChange ={(e)=> {setvalue(e.target.value)}} >
                <option className="option" value="Tbilisi">Tbilisi</option>
                <option className="option" value="Rustavi">Rustavi</option>
                <option className="option" value="Batumi">Batumi</option> 
            </select>
            <p onClick = {()=>dispatch({
                type: "get_filter",
                data: wheather_city
            })}> <Link className ="goFivedays" to = "/fivedays">5 day  forecast</Link></p>
            
        </div>
        
    )
}
