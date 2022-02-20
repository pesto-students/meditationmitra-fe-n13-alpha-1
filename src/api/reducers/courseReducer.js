import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courseReducer",
  initialState: {
    cart: [],
    file: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((course) => action.payload === course.id);
    },
    updateFile: (state, action) => {
      const { payload } = action;
      state.file = payload;
    },
  },
});

export const { actions: courseActions, reducer: courseReducer } = courseSlice;
