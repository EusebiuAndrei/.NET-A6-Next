import React from 'react';
import AppBar from './components/AppBar';
import Content from "./components/Content";

const DefaultLayout = ({children}) => {
    return <>
        <AppBar />
        <Content>{children}</Content>
    </>
}

export default DefaultLayout;