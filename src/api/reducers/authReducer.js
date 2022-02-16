import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    isFetching: true,
    data: [],
    error: "",
  },
  reducers: {
    fetchAuth: (state) => {
      state.isFetching = true;
    },
    fetchAuthSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.data = payload;
    },
    fetchAuthFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
