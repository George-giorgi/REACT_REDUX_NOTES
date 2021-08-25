import {NOTES} from '../data_note'

const sort_data = (data)=>{
    const sorted_data = data.sort((a,b)=>{

        return b.id - a.id
    })

    return sorted_data
}
//migheba, update, delete, insert
const NoteReducer = (state = NOTES  ,action)=>{
    switch(action.type){
        case "get_all":

            return NOTES
        case "add_note":
            const new_note = action.data
            const add_sort_data = sort_data([...state, new_note])
            
            return add_sort_data
        case "delete_notes":
            const delete_note_id = action.for_delete_id
            const filter_for_delete = state.filter(item=> item.id != delete_note_id)
            return filter_for_delete
        case "change_important":
            const for_change_id = action.for_change_id
            const find_for_change = state.find(item => item.id == for_change_id)
            const changeNote = {
                ...find_for_change,
                important: !find_for_change.important
            }
            
            return state.map((note) => note.id != for_change_id? note : changeNote)    
        case "update":
            const dataFupdate = action.data
            
            const find_note = state.find(note => note.id == dataFupdate.id)
            const changed_note = {
                ...find_note,
                content: dataFupdate.content 
            }
            return state.map((note) => {
               return note.id != find_note.id? note: changed_note
            })
        default: 
            
            return state
     
    }
}

const conditionReducer = (state ="ALL", action) =>{
   switch (action.type){
        case "ALL":

            return action.type
        
        case "important":

            return action.type
        
        case "nonimportant":

            return action.type
        
        default:

            return state
   }
        
}


export { NoteReducer, conditionReducer }