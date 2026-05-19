import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    footerData : {},
    fetchLoading: false,
    error: null
}

const BASE_URL = "https://eco-ecom-cms-driven.onrender.com/api/footer";

// fetch Footer Data
export const fetchFooterData = createAsyncThunk(
    "footer/fetchAll",
    async(_ , {rejectWithValue}) => {
        try{
            const response = await fetch(`${BASE_URL}`);
            if(!response.ok){
                throw new Error("Failed to fetch footer data");
            };
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);

export const FooterSlice = createSlice({
    name: "footer",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFooterData.pending , (state) => {
            state.fetchLoading = true;
            state.error = null;
        })
        .addCase(fetchFooterData.fulfilled , (state , action) => {
            state.fetchLoading = false;
            state.footerData = action.payload;
            state.error = null;
        })
        .addCase(fetchFooterData.rejected , (state , action) => {
            state.fetchLoading = false;
            state.error = action.payload;
        })
    }
});

export default FooterSlice.reducer;