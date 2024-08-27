import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"

// este archivo se pasa al main.jsx

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

