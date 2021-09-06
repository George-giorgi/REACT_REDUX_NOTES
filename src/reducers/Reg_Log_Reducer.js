


const Reg_Log_Reduce = (state = "", action) =>{

    switch(action.type){
        case "reg_request":
            const resp = action.data
            if(typeof(resp) !== "object"){

                const resp_login = {
                    reps: resp,
                    valid: "register"
                }
                return resp_login
            }else{
                return resp
            }
        case "log_request":
            const Rresp = action.data
            
            if(typeof(Rresp) == "object"){
                localStorage.setItem("user", Rresp.email)
            }
            if(typeof(Rresp) !== "object"){

                const resp_login = {
                    reps: Rresp,
                    valid: "login"
                }
                return resp_login
            }else{
                return Rresp
            }
        default:

            return state
    }   

}

export {Reg_Log_Reduce}