import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersWithPage, type PaginatedUsers } from "../services/users.service";
import type { UserSearchParams } from "../types/user.types";

interface UsersState {
  result: PaginatedUsers | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = { result: null, isLoading: false, error: null };

export const fetchUsers = createAsyncThunk<PaginatedUsers, UserSearchParams, { rejectValue: string }>("users/fetchPage", async (params, { rejectWithValue }) => {
  try {
    return await getAllUsersWithPage(params);
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : "Unable to load users.");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action) => { state.isLoading = false; state.result = action.payload; })
      .addCase(fetchUsers.rejected, (state, action) => { state.isLoading = false; state.error = action.payload ?? action.error.message ?? "Unable to load users."; });
  },
});

export default usersSlice.reducer;
