import axios from 'axios'



const Reg_requst = async(body)=>{

    const responce = await axios.post("/register", body)
    
    return responce.data
}

const Log_request = async(body)=>{

    const responce = await axios.post("/login", body)

    return responce.data
}

export {Reg_requst, Log_request}