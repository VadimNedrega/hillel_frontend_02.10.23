import React, { useState } from "react";
import { App } from "./App";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import { Provider } from 'react-redux';
import store from "./store/store";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export function AppWrapper() {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            ToDoShechka
                        </Typography>
                        <IconButton onClick={toggleTheme} color="inherit">
                            {theme === lightTheme ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <App />
            </Provider>
        </ThemeProvider>
    );
}
