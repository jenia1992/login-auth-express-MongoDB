import * as actionType from "../action/actionType"
import { updateObject } from "./utilReducer"
const initialState = {
   toDo:""
   

}
//Login Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.UPDATE_USER_INFO:{
          return updateObject(state,{toDo:action.payload})
          
      }

        default:
            return state;

    }



}
export default reducer