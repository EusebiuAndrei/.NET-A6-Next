import {useCookies} from "react-cookie";
import {useMutation} from "react-query";
import {ApiService} from "../themes/Constants";

const register = async (user: any) => {
    const res = await fetch(`${ApiService.LOCAL}/api/v1/authenticate/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(user, null, 2), agent: ApiService.AGENT} as RequestInit)
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data;
}

const useRegister = () => {
    const [, setCookie] = useCookies()

    const registerMutation = useMutation((user: any) => register(user), {
        onSettled: (data, error, variables, context) => {
            console.log(data);
            console.log(error);
            console.log(variables);
            console.log(context)
        },
        onSuccess: (data, variables, context) => {
            console.log('UUUUUUUUU',data);
            setCookie("authToken", data.token, {
                path: "/",
                maxAge: 3 * 3600, // Expires after 1hr
                sameSite: true,
            })
        }
    });

    // console.group("Request")
    // console.log("idle", registerMutation.isIdle);
    // console.log("loading", registerMutation.isLoading);
    // console.log("success", registerMutation.isSuccess);
    // console.log("error", registerMutation.isError);
    // console.groupEnd()

    return registerMutation
}

export  default useRegister;