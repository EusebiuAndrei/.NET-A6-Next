import https from 'https';
import {ApiService} from "../../themes/Constants"
const HOST = ApiService.LOCAL

const agent = new https.Agent({
     rejectUnauthorized: false,
});

const getNews = async (options) => {
    try{
        const res = await fetch(`${HOST}/api/v1/news`, {agent, ...options} as RequestInit)
        const data = await res.json()
        return data;
    } catch(e){
        console.log(e)
    }
}

const getTopics = async (options) => {
    const res = await fetch(`${HOST}/api/v1/topic`, {agent, ...options} as RequestInit)
    const data = await res.json()
    return data;
}

const getNewsById = async (id : any) => {
    try{

        const res = await fetch(`${HOST}/api/v1/news/${id}`, {agent} as RequestInit)
        const data = await res.json()
        return data;
    } catch(e){
        console.log(e)
    }
}

export default {
    getNews,
    getTopics,
    getNewsById
}