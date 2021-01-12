import https from "https";
const agent = new https.Agent({
    rejectUnauthorized: false,
});

const ApiService = {
    LOCAL:"https://localhost:5001",
    DEVELOPMENT:"",
    AGENT: agent
}

export {
    ApiService
}