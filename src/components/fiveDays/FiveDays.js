import {Link, useHistory} from 'react-router-dom'
import "./fivedays.scss"
import Svg from '../weather/svg/Svg'
import {useSelector} from "react-redux"




export default function FiveDays() {
    const history = useHistory()
    const Wdata = useSelector(state=> state.wheather)
    const data = []
    console.log(Wdata)
    
    const FiltWeather = ({value, indent, sky})=>{
        
        return(
            <div style={indent? {marginTop : "40px"}: {marginTop:"0px"}} className = "wrappDayforecast">
                <Svg  sky ={sky}/>
                <p className ="tempp">{value.temp}&#8451;</p>
                <p className ="timee">{value.time}</p> 
            </div>
        )
    }
    var filter = ""
    var ident = false
    const func = ()=>{
        Wdata.forEach(m=>{
            if(filter === "" || filter === m.time.slice(0,10)){
                data.push(<FiltWeather sky ={m.sky} key={m.id} value ={m} indent ={ident} />)
            }else{
                data.push(<FiltWeather sky ={m.sky} key={m.id} value ={m} indent ={true} />)
            }
            filter = m.time.slice(0,10)
            
        })
    }
    
    func()
    
    return (
        <div className ="main_5Days">
            <h3 style ={{marginBottom: "20px"}}><Link className ="baCktonotes" to = "/notes">go to back</Link> </h3>
            <p style ={{marginBottom: "20px", color: "white", fontWeight:"500"}}>city {Wdata.length===0? history.push("/notes"): Wdata[0].city}</p>
            {data}
        </div>
    )
}
