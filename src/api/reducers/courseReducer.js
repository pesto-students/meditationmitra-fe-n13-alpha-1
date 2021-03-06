import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courseReducer",
  initialState: {
    cart: [],
    file: null,
    imageURL: "",
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (course) => action.payload === course.slug
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    updateFile: (state, action) => {
      const { payload } = action;
      if (payload) {
        state.file = payload.file;
        state.imageURL = payload.imageURL;
      } else {
        state.file = null;
        state.imageURL = "";
      }
    },
  },
});

export const { actions: courseActions, reducer: courseReducer } = courseSlice;
