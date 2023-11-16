import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsList: [],
  activeIndex: 0,
  favoritList: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    listNews(state, action) {
      state.newsList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addFavorit(state, action) {
      const item = state.favoritList.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.count++;
      } else {
        state.favoritList.push(action.payload);
      }
    },
  },
});

export const { listNews, changeActiveIndex, addFavorit } = newsSlice.actions;
export default newsSlice.reducer;
