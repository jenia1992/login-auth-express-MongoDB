import * as actionType from "./actionType"

export const updateUserInfo =(obj)=>{
    return {
        type:actionType.UPDATE_USER_INFO,
        payload:obj
    }
}
