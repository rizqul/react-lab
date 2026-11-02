import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/auth.types";

interface AuthState {
  token: string | null;
  role: string | null;
  fullname: string | null
}

const initialState: AuthState = {
  token: sessionStorage.getItem("token"),
  role: sessionStorage.getItem("role"),
  fullname: sessionStorage.getItem("fullname"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: { payload: LoginResponse }) => {
      // simpan data menjadi state global untuk dibawa ketika hit endpoint lain
      state.token = action.payload.token;
      state.role = action.payload.customer.role;
      state.fullname = action.payload.customer.fullname;

      // disimpan di session storage, jadi ketika browser kita refresh kita tidak harus login lagi karena jwt sudah tersimpan di session storage
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("role", action.payload.customer.role);
      sessionStorage.setItem("fullname", action.payload.customer.fullname);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.fullname = null;

      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("fullname");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
