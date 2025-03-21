import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUsers from "./UserService";

// Initial State
const initialState = {
    list: [],
    isError: false,
    isLoading: false,
    error: null, // Added for better error handling
};

// Async Thunk to Fetch Users
export const getUsers = createAsyncThunk('get-user', async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem('token'); // Ensure token is stored
        const users = await fetchUsers(token); // Pass token to service
        return users;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Internal Server Error");
    }
});

// User Slice
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset:(state)=>{
            state.isError = false;
            state.isLoading = false;
            state.error = null;
        }
    }, // Removed incorrect reducer logic here
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload; // Correct error handling
            });
    }
});

export default userSlice.reducer;
