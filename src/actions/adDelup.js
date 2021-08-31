import axios from "axios"

const Add_note = (content)=>{
    
    const action = {
        type: "add_note",
        data: content
    }
    
    return action
}

const delete_notes = (id)=>{
    
    const action = {
        type: "delete_notes",
        for_delete_id: id
    }

    return action
}

const cahngeImportant = (id)=>{
    
    const action = {
        type: "change_important",
        for_change_id: id
    }

    return action
}

const forUpdate = (content)=>{

    const action ={
        type: "update",
        data: content
    }
    return action
}

export {Add_note, delete_notes , cahngeImportant, forUpdate}