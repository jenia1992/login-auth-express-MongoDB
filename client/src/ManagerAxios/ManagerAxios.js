import axios from "axios";

export const getDataFromServer=(data)=>{
    if(data.method === "get"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }
    else if(data.method==="post"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }
    else if(data.method==="DELETE"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }
    else if(data.method==="PUT"){
        return axios.request({
            url:data.url,
            method:data.method,
            data:data.data,
            headers:data.headers,
            params:data.params
        })
    }

}