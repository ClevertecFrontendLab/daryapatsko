import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   FeedBack: [],
   message: '',
   rating: 0,
   refetchData: false,
   
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
        },
        setRefetch(state){
            state.refetchData = !state.refetchData
        }
    }
})

export const {setFeedBack, setReview, setRefetch} = feedBackSlice.actions

export default feedBackSlice.reducer