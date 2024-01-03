import { ADD, EDIT } from "./Actiontype"

export const addtask=(data)=>{
    return{type:ADD,payload:data}
}
export const edittask=(id,data)=>{
    return{type:EDIT,payload:{id,data}}
}