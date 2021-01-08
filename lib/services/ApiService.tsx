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

export const login = async (user: any) => {
        const res = await fetch(`${HOST}/api/v1/authenticate/login`,
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user, null, 2), agent} as RequestInit)
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        return data;
}

export default {
    getNews,
    getTopics,
}