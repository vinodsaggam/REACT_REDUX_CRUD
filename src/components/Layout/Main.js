import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
import Divider from '@mui/material/Divider';


function Main({ children, title }) {
    return (
        <>
            <CssBaseline />
            <Header title={title} />
            <Divider variant="middle" />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Main