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

const latestNews = async (options) => {
    try{
        const res = await fetch(`${HOST}/api/v1/news/latest-news?number=3`, {agent, ...options} as RequestInit)
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

const getNewsByTopic = async (id : any) => {
    try{

        const res = await fetch(`${HOST}/api/v1/news/topic/${id}`, {agent} as RequestInit)
        const data = await res.json()
        return data;
    } catch(e){
        console.log(e)
    }
}

const addViewToNews = async (id: any) =>{
    try{
        // const res = await fetch(`${HOST}/api/v1/news/views/${id}`, { method: 'PUT' } as RequestInit)
        // if (!res.ok) throw new Error(res.statusText)


        const res = await fetch(`${HOST}/api/v1/news/views/${id}`,
            {
                method: 'PUT',
                agent: ApiService.AGENT
            } as RequestInit)
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        return data;


    } catch(e){
        console.log(e)
    }
}

export default {
    getNews,
    getTopics,
    getNewsById,
    latestNews,
    getNewsByTopic,
    addViewToNews
}