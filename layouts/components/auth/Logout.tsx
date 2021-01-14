import React from 'react';
import Button from '@material-ui/core/Button';
import useLogout from "../../../hooks/useLogout";
import {useRouter} from "next/router";

export default function Logout() {
    const logout = useLogout();
    const router = useRouter()

    const handleClick = () => {
        logout();
        router.replace('/')
        console.log("LOGOUT LOGOUT")
    }

    return (
        <React.Fragment>
            <Button onClick={handleClick} style={{flexGrow: 1}}>
                Logout
            </Button>
        </React.Fragment>
    );
}
