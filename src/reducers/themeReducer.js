

const change_theme = (state =false, action)=>{
    switch(action.type){
        case "change_theme":
            
            return !state
        default:

            return state
    }
}

export {change_theme}