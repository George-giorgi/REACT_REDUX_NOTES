


const whatherReducer = (state = [], action)=>{
    switch(action.type){
        case "get_all_wheather":

            const responce = action.data

            return responce

        default:
            return state
          
    }

}

export  { whatherReducer }