import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    listNews: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { listNews } = newsSlice.actions;
export default newsSlice.reducer;
