import https from 'https';

const agent = new https.Agent({
     rejectUnauthorized: false,
});

const getNews = async () => {
    try{
        const res = await fetch('https://localhost:5001/api/v1/news', {agent} as RequestInit)
        // console.log('RES', res);
        const data = await res.json()
        // console.log('DATA', data);
        return data;
    }catch(e){
        console.log(e)
    }
}

export default {
    getNews
}