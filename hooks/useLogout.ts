import {useCookies} from "react-cookie";

const useLogout = () => {
    const [, , deleteCookie] = useCookies()

    return () => deleteCookie("authToken");
}

export default useLogout