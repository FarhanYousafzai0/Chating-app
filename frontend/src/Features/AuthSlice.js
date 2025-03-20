import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./AuthService";

const initialState = {
    auth: [],
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    authMessage: '',
};

// Login Thunk
export const addLoginData = createAsyncThunk('add-login', async (userData, thunkAPI) => {
    try {
        const response = await authServices.login(userData);
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Signup Thunk
export const addSignUpData = createAsyncThunk('add-signup', async (userData, thunkAPI) => {
    try {
        const response = await authServices.register(userData);
        localStorage.setItem('user', JSON.stringify(response));
        console.log(response)
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.error);
    }
});

// Logout Thunk (Corrected)
export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await authServices.logout(); // Assuming logout API clears session
        localStorage.removeItem('user'); // Clear localStorage
        return null;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.error);
    }
});

// Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.authMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addLoginData.pending, (state) => { state.isLoading = true; })
            .addCase(addLoginData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.authMessage = 'Login Successful!';
            })
            .addCase(addLoginData.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.authMessage = action.payload;
            })

            .addCase(addSignUpData.pending, (state) => { state.isLoading = true; })
            .addCase(addSignUpData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(addSignUpData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.authMessage = action.payload;
                state.user = null;
            })

            .addCase(logout.fulfilled, (state) => {
               
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isError = true;
                state.authMessage = action.payload || 'Logout failed.';
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
