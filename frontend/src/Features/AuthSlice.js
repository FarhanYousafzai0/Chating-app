import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./AuthService";

const initialState = {
    auth: [],
    user: null, // Added `user` property
    isLoading: false,
    isError: false,
    isSuccess: false,
    authMessage: '',
};

// Call Register Function:

export const addLoginData = createAsyncThunk('add-login', async (userData, thunkAPI) => {
    try {
        return authServices.login(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const addSignUpData = createAsyncThunk('add-signup', async (userData, thunkAPI) => {
    try {
        return authServices.register(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Create Slice Function

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.authMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            // Login Cases
            .addCase(addLoginData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addLoginData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.authMessage = action.payload;
            })
            .addCase(addLoginData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.authMessage = action.payload;
            })

            // SignUp Cases
            .addCase(addSignUpData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addSignUpData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(addSignUpData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.authMessage = action.payload; // Fixed error message property
                state.user = null;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
