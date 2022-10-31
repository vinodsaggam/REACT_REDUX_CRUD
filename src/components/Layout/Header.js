import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import React from 'react'
import { Close } from '@mui/icons-material';

function Header({title}) {
    return (

        <AppBar position="static" color='inherit' elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                    onClick={() => {
                        window.location.href = '/'
                      }}
                >
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>

    )
}

export default Header