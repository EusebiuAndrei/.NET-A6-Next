import React from 'react';
import {Container} from "@material-ui/core";
import { Grid } from '@material-ui/core';

export default function Content({children}) {
    return <Container maxWidth="lg">
        {/*<Grid   container*/}
        {/*        direction="column"*/}
        {/*        justify="center"*/}
        {/*        alignItems="flex-start"*/}
        {/*        spacing={3}*/}
        {/*        style={{marginTop: '2rem'}}>*/}
            {children}
        {/*</Grid>*/}
    </Container>
}
