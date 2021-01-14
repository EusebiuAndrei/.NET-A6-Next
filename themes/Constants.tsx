import https from "https";
const agent = new https.Agent({
    rejectUnauthorized: false,
});

const ApiService = {
    LOCAL:"https://news-app-uaic.azurewebsites.net",
    DEVELOPMENT:"",
    AGENT: agent,
    JWT_KEY: 'ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM'
}

export {
    ApiService
}