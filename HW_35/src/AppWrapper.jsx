import React from "react";
import { App } from "./App";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { CssBaseline, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "./service";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const AppWrapper = () => {
    const isDarkMode = useSelector(state => state.theme.darkMode);
    const dispatch = useDispatch();

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ToDoShechka
                    </Typography>
                    <IconButton onClick={handleToggleTheme} color="inherit">
                        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <App />
        </ThemeProvider>
    );
};
