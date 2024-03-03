import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   FeedBack: [],
   message: '',
   rating: 0,
   
}

const feedBackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setFeedBack(state, action){
            state.FeedBack = action.payload.feedback;
        },
        setReview(state,action){
            state.message = action.payload.message;
            state.rating = action.payload.rating
        }
    }
})

export const {setFeedBack, setReview} = feedBackSlice.actions

export default feedBackSlice.reducer