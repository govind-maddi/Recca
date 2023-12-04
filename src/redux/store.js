import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";

import logger from "redux-logger";

import orderReducer from './orderSlice';

const store = configureStore({
    reducer:{
        order:orderReducer,
    },
    middleware: [...getDefaultMiddleware(), logger],
});

export default store;