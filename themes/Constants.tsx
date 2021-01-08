import https from "https";
const agent = new https.Agent({
    rejectUnauthorized: false,
});

const ApiService = {
    LOCAL:"https://localhost:5005",
    DEVELOPMENT:"",
    AGENT: agent
}

export {
    ApiService
}