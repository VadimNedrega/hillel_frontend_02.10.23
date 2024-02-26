import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import actionInfoReducer from './toDoInfo/toDoInfo.reducer';
import actionReducer from './toDoList/toDoList.reducer';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        actionInfo: actionInfoReducer,
        actions: actionReducer,
    },
    devTools: true,
});

export default store;