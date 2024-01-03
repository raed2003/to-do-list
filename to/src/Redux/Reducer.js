import { ADD, EDIT } from "./Actiontype"

const initialState = [{id: 1,description:"Drink coffee",isdone:false}]

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return state =  [...state, payload]

  default:
    return state
    case EDIT:
      return state =state.map(e=>e.id===payload.id?e=payload.data:e)
  }


}
