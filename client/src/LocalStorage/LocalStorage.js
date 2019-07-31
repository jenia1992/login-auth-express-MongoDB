export const getToken=()=>{
    localStorage.getItem("kaka");
    
}
export const setToken=(token,email)=>{
    localStorage.setItem("kaka",token);
    localStorage.setItem("email",email);
}
export const removeToken=()=>{
    localStorage.clear();
    
}