import { createSlice } from "@reduxjs/toolkit";

// creo un estado inicial con valores predeterminados
const initialState = {
    name: null,
    username: null,
    email: ""
}

export const userSlice = createSlice({
    name: "user", // le pongo un nombre a la porción para poder identificarlo desde otras partes para cuando quiera acceder al estado
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email} = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        },
    },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;