

const change_theme = (state = false, action)=>{
    switch(action.type){
        case "change_theme":
            
            return !state
        case "from_store":

            return action.data

        default:
          
            return state    
    }
}

export {change_theme}