import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    homeData : {},
    fetchLoading: false,
    error: null
}

const BASE_URL = "https://eco-ecom-cms-driven.onrender.com/api/homepage";

// fetch Home Data
export const fetchHomeData = createAsyncThunk(
    "home/fetchAll",
    async(_ , {rejectWithValue}) => {
        try{
            const response = await fetch(`${BASE_URL}`);
            if(!response.ok){
                throw new Error("Failed to fetch home data");
            };
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);

export const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchHomeData.pending , (state) => {
            state.fetchLoading = true;
            state.error = null;
        })
        .addCase(fetchHomeData.fulfilled , (state , action) => {
            state.fetchLoading = false;
            state.homeData = action.payload;
            state.error = null;
        })
        .addCase(fetchHomeData.rejected , (state , action) => {
            state.fetchLoading = false;
            state.error = action.payload;
        })
    }
});

export default HomeSlice.reducer;