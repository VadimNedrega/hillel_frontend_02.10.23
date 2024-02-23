import { configureStore } from '@reduxjs/toolkit';

import actionInfoReducer from './toDoInfo/toDoInfo.reducer';
import actionReducer from './toDoList/toDoList.reducer';

const store = configureStore({
  reducer: {
    actionInfo: actionInfoReducer,
    actions: actionReducer,
  },
  devTools: true,
});

export default store;
