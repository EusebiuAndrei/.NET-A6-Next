import https from "https";
const agent = new https.Agent({
    rejectUnauthorized: false,
});

const ApiService = {
    LOCAL:"https://news-app-uaic.azurewebsites.net",
    DEVELOPMENT:"",
    AGENT: agent
}

export {
    ApiService
}