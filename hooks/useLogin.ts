import {useCookies} from "react-cookie";
import {useMutation} from "react-query";
import {ApiService} from "../themes/Constants";
import {useRouter} from "next/router";

const login = async (user: any) => {
    const res = await fetch(`${ApiService.LOCAL}/api/v1/authenticate/login`,
        {method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user, null, 2), agent: ApiService.AGENT} as RequestInit)
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data;
}

const useLogin = () => {
    const [, setCookie] = useCookies()
    const router = useRouter()

    const loginMutation = useMutation((user: any) => login(user), {
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
            router.replace('/')
        }
    });

    // some
    // console.group("Request")
    // console.log("idle", loginMutation.isIdle);
    // console.log("loading", loginMutation.isLoading);
    // console.log("success", loginMutation.isSuccess);
    // console.log("error", loginMutation.isError);
    // console.groupEnd()

    return loginMutation
}

export  default useLogin;