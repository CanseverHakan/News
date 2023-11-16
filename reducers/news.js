import React from "react"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  newsList: [],
  favorites: [],
  selectedArticle: null
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {

    listNews: (state, action) => {
      state.newsList = action.payload
    },
    favorite: (state, action) => {
      const article = action.payload
      const index = state.favorites.findIndex((fav) => fav.title === article.title)
      if (index) {
        state.favorites.push(article)
      } else {
        state.favorites.splice(index, 1)
      }
    },
    selectArticle: (state, action) => {
      state.selectedArticle = action.payload;
    }
  }
})


export const { listNews, favorite, selectArticle } = newsSlice.actions
export default newsSlice.reducer

