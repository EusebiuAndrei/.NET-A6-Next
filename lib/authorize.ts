import cookies from "next-cookies";
import jwt from 'jsonwebtoken';
import {useCookies} from "react-cookie";
import config from '../next.config'

export const useAuthorization = () => {
    const [cookies] = useCookies()
    const { authToken } = cookies;

    let isAuthenticated, tokenData;
    try {
        tokenData = jwt.verify(authToken, config.publicRuntimeConfig.jwtKey);
        isAuthenticated = true
    } catch (e) {
        console.log('error')
        isAuthenticated = false
    }

    return {isAuthorized: isAuthenticated, tokenData}
}

const authorize = (context) => {
    const { authToken } = cookies(context);

    console.log("!!!!!!!!!!!!!!")
    console.log('jwt', process.env.JWT_KEY)
    console.log('auth', authToken)

    let isAuthenticated, tokenData;
    try {
        tokenData = jwt.verify(authToken, process.env.JWT_KEY);
        isAuthenticated = true
    } catch (e) {
        isAuthenticated = false
    }

    // Use !isAuthenticated for error cases
    const redirectObject = {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }

    return {isAuthorized: isAuthenticated, tokenData, redirectObject}
}

export  default authorize;