import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    isFetching: true,
    userInfo: {},
    error: "",
    isLoggedIn: false,
  },
  reducers: {
    fetchAuth: (state) => {
      state.isFetching = true;
    },
    fetchAuthSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload;
      state.isLoggedIn = true;
      window.localStorage.setItem("token", payload.token);
    },
    fetchAuthFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;

const updateUserSlice = createSlice({
  name: "updateUserReducer",
  initialState: {
    isUpdateing: true,
    error: "",
  },
  reducers: {
    updateUserRole: (state) => {
      state.isUpdateing = true;
    },
    updateUserRoleSuccess: (state) => {
      state.isUpdateing = false;
    },
    updateUserRoleFailure: (state, action) => {
      const { payload } = action;
      state.isUpdateing = false;
      state.error = payload;
    },
  },
});

export const { actions: updateUserActions, reducer: updateUserReducer } =
  updateUserSlice;
