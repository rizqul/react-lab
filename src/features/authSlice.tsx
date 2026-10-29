import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/auth.types";

interface AuthState {
  token: string;
  role: string;
  username: string;
}

const initialState: AuthState = {
  token: "",
  role: "ADMIN",
  username: "admin",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: { payload: LoginResponse }) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.username = action.payload.username;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
