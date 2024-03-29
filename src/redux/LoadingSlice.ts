import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading(state){
            state.isLoading = !state.isLoading;
        },
       
    }
})

export const {setLoading} = loadingSlice.actions

export default loadingSlice.reducer