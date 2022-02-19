import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    isFetching: false,
    userInfo: {},
    error: "",
    isLoggedIn: false,
    isNewUser: false,
    // token: "",
  },
  reducers: {
    fetchAuth: (state) => {
      state.isFetching = true;
    },
    fetchAuthSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.userInfo = payload.user;
      state.isNewUser = payload.isNewUser;
      // state.token = payload.token;
      window.localStorage.setItem("token", payload.token);
      state.isLoggedIn = true;
    },
    fetchAuthFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.error = payload;
    },
    updateUserRole: (state) => {
      state.isFetching = true;
    },
    updateUserRoleSuccess: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.isNewUser = false;
      state.userInfo.role = payload.role;
    },
    updateUserRoleFailure: (state, action) => {
      const { payload } = action;
      state.isFetching = false;
      state.error = payload;
    },
    logout: (state) => {
      state.userInfo = {};
      state.isLoggedIn = false;
      state.isNewUser = false;
      // state.token = "";
      window.localStorage.removeItem("token");
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
