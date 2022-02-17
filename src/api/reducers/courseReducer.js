import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courseReducer",
  initialState: {
    courses: [],
  },
  reducers: {
    updateCart: (state, action) => {
      state.courses = [...state.courses, action.payload];
    },
  },
});

export const { actions: courseActions, reducer: courseReducer } = courseSlice;
