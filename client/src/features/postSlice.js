import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    // getAllPosts(state, {payload}) => {
    //     state.data = payload.data
    // }
  },
});
