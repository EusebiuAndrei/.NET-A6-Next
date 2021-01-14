import https from 'https';
import {ApiService} from "../../themes/Constants"
const HOST = ApiService.LOCAL

const agent = new https.Agent({
     rejectUnauthorized: false,
});

const getNews = async (options : any, isAuthorized:any) => {
    try{
        const res = await fetch(`${HOST}/api/v1/news`, {agent, ...options} as RequestInit)
        let data = await res.json()
        if(isAuthorized == 0){
            data.forEach((element,key) => {
                if(element.classifiedAs === 0){
                    console.log(key)
                    data.splice(key,1)
                }
            });
        }
        return data;
    } catch(e){
        console.log(e)
    }
}

const latestNews = async (options,nr) => {
    try{
        const res = await fetch(`${HOST}/api/v1/news`, {agent, ...options} as RequestInit)
        const data = await res.json()
        let newsData = [];
        let newsNumber = nr;
        let currentNewsId = [];
        const dataLength = data.length;
        while(newsNumber){
            let randomKey = Math.floor(Math.random() * dataLength) + 0;
            if(!currentNewsId.includes(data[randomKey].id)){
                if(data[randomKey].sourceImage !== "" && newsNumber !== 0){
                    newsNumber--;
                    newsData.push(data[randomKey])
                    currentNewsId.push(data[randomKey].id)
                }
            }
        }
        return newsData;
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
        const res = await fetch(`${HOST}/api/v1/news/views/${id}`, { method: 'PUT' } as RequestInit)
        if (!res.ok) throw new Error(res.statusText)

    } catch(e){
        console.log(e)
    }
}

const addReadToNews = async (id: any) =>{
    try{
        const res = await fetch(`${HOST}/api/v1/news/read/${id}`, { method: 'PUT' } as RequestInit)
        if (!res.ok) throw new Error(res.statusText)

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
    addViewToNews,
    addReadToNews
}