import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "./slices/user.slice";


const rootReducer = combineReducers({
    characters: characterReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;