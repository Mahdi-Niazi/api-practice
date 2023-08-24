import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const getUsers = createAsyncThunk("users/getUsers", async (thunkAPI) => {
  try {
    const response = axios.get("https://randomuser.me/api/?results=5");
    return console.log(response.data.results);
  } catch (error) {
    return thunkAPI.rejectWithValue("something went wrong");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong";
      });
  },
});

export default usersSlice.reducer;
