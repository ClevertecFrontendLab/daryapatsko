import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    remember: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        removeUser(state){
            state.email = null;
            state.password = null;
        },
        setRemember(state){
            state.remember = !state.remember
        }
    }
})

export const {setUser, removeUser, setRemember} = userSlice.actions

export default userSlice.reducer