import React from 'react';
import {Container, Divider} from "@material-ui/core";
import { Grid } from '@material-ui/core';
import {useWindowSize} from "../../lib/services/ScreenSizes"
import {Colors} from "../../themes/Colors"

export default function Content({children}) {
    const {width,height} = useWindowSize()
    return(
        <div style={{width:width,height:height}}>
            {children}
        </div>
    )
}
