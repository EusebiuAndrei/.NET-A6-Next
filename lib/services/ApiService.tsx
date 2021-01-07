import https from 'https';
import {ApiService} from "../../themes/Constants"
const HOST = ApiService.LOCAL_BACKEND
const HOST_CRAWLER = ApiService.LOCAL_CRAWLER
const agent = new https.Agent({
     rejectUnauthorized: false,
});

const getNews = async () => {
    try{
        const res = await fetch(`${HOST}/api/v1/news`, {agent} as RequestInit)
        const data = await res.json()
        return data;
    } catch(e){
        console.log(e)
    }
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

const getTopics = async () => {
    try{
        const res = await fetch(`${HOST}/api/v1/topic`, {agent} as RequestInit)
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