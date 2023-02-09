import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const mystyle = {
        textAlign: 'center',
        cursor: 'pointer',
        color: '#3D3635',
        fontWeight: '500',
        textDecorationColor: '#3D3635',
        textDecorationThickness: '2px',
        borderRadius: '15px',
        width: '100px',
        height: '50px'
    }

    return (
        

        <Stack spacing={2} direction="column" sx={{ justifyContent: "center", alignItems: 'center', height: '100vh', background: 'deepskyblue' }}>

            <Link to="/auth_form" style={mystyle}>Authorization Form</Link>

            <Link to="/disclosure" style={mystyle}>Disclosure Form</Link>

            <Link to="/memberlogin" style={mystyle}>Member Login</Link>

            <Link to="/crud" style={mystyle}>CRUD Form</Link>

        </Stack>
    )
}

export default Home
