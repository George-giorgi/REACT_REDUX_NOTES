


const Reg_Log_Reduce = (state = "", action) =>{

    switch(action.type){
        case "reg_request":
            const resp = action.data

            return resp
        case "log_request":
            const Rresp = action.data
            
            if(typeof(Rresp) == "object"){

                localStorage.setItem("user", Rresp.email)
            }
            
            return Rresp
        default:

            return state
    }   

}

export {Reg_Log_Reduce}