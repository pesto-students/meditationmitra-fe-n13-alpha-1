import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courseReducer",
  initialState: {
    isFetching: true,
    data: [],
    error: "",
  },
  reducers: {
    fetchCourses: (state) => {
      state.isFetching = true;
    },
    fetchCoursesSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.data = payload;
    },
    fetchCoursesFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const { actions: courseActions, reducer: courseReducer } = courseSlice;
