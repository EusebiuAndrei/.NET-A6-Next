import {useCookies} from "react-cookie";
import {useMutation} from "react-query";
import {ApiService} from "../../../themes/Constants";
import {useRouter} from "next/router";

const login = async (news: any) => {
    const res = await fetch(`${ApiService.LOCAL}/api/v1/news/validate`,
        {method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(news, null, 2), agent: ApiService.AGENT} as RequestInit)
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data;
}

const useValidateNews = (handleSnackbarTrueClick: any, handleSnackbarFalseClick: any) => {
    const [, setCookie] = useCookies()
    const router = useRouter()

    const validateNewsMutation = useMutation((news: any) => login(news), {
        onSettled: (data, error, variables, context) => {
            console.log(data);
            console.log(error);
            console.log(variables);
            console.log(context)
        },
        onSuccess: (data, variables, context) => {
            console.log('UUUUUUUUU', data);
            if (data === 1) {
                handleSnackbarTrueClick()
            } else {
                handleSnackbarFalseClick()
            }
        }
    });

    // console.group("Request")
    // console.log("idle", validateNewsMutation.isIdle);
    // console.log("loading", validateNewsMutation.isLoading);
    // console.log("success", validateNewsMutation.isSuccess);
    // console.log("error", validateNewsMutation.isError);
    // console.groupEnd()

    return validateNewsMutation
}

export  default useValidateNews;