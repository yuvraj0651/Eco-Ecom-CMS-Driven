import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    aboutData : {},
    fetchLoading: false,
    error: null
}

const BASE_URL = "https://eco-ecom-cms-driven.onrender.com/api/aboutpage";

// fetch About Data
export const fetchAboutData = createAsyncThunk(
    "about/fetchAll",
    async(_ , {rejectWithValue}) => {
        try{
            const response = await fetch(`${BASE_URL}`);
            if(!response.ok){
                throw new Error("Failed to fetch about data");
            };
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);

export const AboutSlice = createSlice({
    name: "about",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAboutData.pending , (state) => {
            state.fetchLoading = true;
            state.error = null;
        })
        .addCase(fetchAboutData.fulfilled , (state , action) => {
            state.fetchLoading = false;
            state.aboutData = action.payload;
            state.error = null;
        })
        .addCase(fetchAboutData.rejected , (state , action) => {
            state.fetchLoading = false;
            state.error = action.payload;
        })
    }
});

export default AboutSlice.reducer;