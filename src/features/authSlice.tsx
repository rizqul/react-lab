import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/auth.types";

interface AuthState {
  token: string | null;
  role: string | null;
  username: string | null;
}

const initialState: AuthState = {
  token: sessionStorage.getItem("token"),
  role: sessionStorage.getItem("role"),
  username: sessionStorage.getItem("username"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: { payload: LoginResponse }) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.username = action.payload.username;

      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("role", action.payload.role);
      sessionStorage.setItem("username", action.payload.username);
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
