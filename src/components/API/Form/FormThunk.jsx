import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkoutFormData : {},
    fetchLoading: false,
    error: null
}

const BASE_URL = "https://eco-ecom-cms-driven.onrender.com/api/checkoutForm";

// fetch Checkout Form Data
export const fetchCheckoutFormData = createAsyncThunk(
    "checkoutForm/fetchAll",
    async(_ , {rejectWithValue}) => {
        try{
            const response = await fetch(`${BASE_URL}`);
            if(!response.ok){
                throw new Error("Failed to fetch checkout form data");
            };
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);

export const CheckoutFormSlice = createSlice({
    name: "checkout-form",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCheckoutFormData.pending , (state) => {
            state.fetchLoading = true;
            state.error = null;
        })
        .addCase(fetchCheckoutFormData.fulfilled , (state , action) => {
            state.fetchLoading = false;
            state.checkoutFormData = action.payload;
            state.error = null;
        })
        .addCase(fetchCheckoutFormData.rejected , (state , action) => {
            state.fetchLoading = false;
            state.error = action.payload;
        })
    }
});

export default CheckoutFormSlice.reducer;