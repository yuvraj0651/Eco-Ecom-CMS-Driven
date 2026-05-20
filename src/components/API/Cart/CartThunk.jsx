import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://eco-ecom-cms-driven.onrender.com/api/cart";

const initialState = {
  cartData: [],
  loading: {
    fetch: false,
    add: false,
    delete: {},
    update: {},
    bulk: false,
  },
  error: null,
};

// Fetch All CartItems
export const getCartItems = createAsyncThunk(
  "cart/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch all cart items");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  },
);

// Add CartItems
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ newItem }, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to the cart");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  },
);

// Delete Item From Cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  },
);

// Update CartItem
export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ id, updatedItem }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        throw new Error("Failed to update item from the cart");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  },
);

// Bulk Delete Items
export const bulkDeleteItems = createAsyncThunk(
  "cart/bulkDelete",
  async (cartIds, { rejectWithValue }) => {
    try {
      const responses = await Promise.all(
        cartIds.map((id) =>
          fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
          }),
        ),
      );
      responses.forEach((response) => {
        if (!response.ok) {
          throw new Error("Failed to bulk delete cart items");
        }
      });
      return cartIds;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  },
);

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state, action) => {
        state.loading.fetch = true;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.cartData = action.payload;
        state.error = null;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading.fetch = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.loading.add = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading.add = false;

        const existingItem = state.cartData.find(
          (item) => item.productId === action.payload.productId,
        );

        if (!existingItem) {
          state.cartData.push({ ...action.payload, quantity: 1 });
        } else {
          existingItem.quantity = (existingItem.quantity ?? 0) + 1;
        }

        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading.add = false;
        state.error = action.payload;
      })
      .addCase(removeFromCart.pending, (state, action) => {
        const id = action.meta.arg;

        state.loading.delete[id] = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const id = action.meta.arg;

        delete state.loading.delete[id];
        state.cartData = state.cartData.filter(
          (item) => item.id !== action.payload,
        );
        state.error = null;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        const id = action.meta.arg;

        delete state.loading.delete[id];
        state.error = action.payload;
      })
      .addCase(updateCart.pending, (state, action) => {
        const id = action.meta.arg.id;

        state.loading.update[id] = true;
        state.error = null;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const id = action.meta.arg.id;

        delete state.loading.update[id];
        state.cartData = state.cartData.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item,
        );
        state.error = null;
      })
      .addCase(updateCart.rejected, (state, action) => {
        const id = action.meta.arg.id;

        delete state.loading.update[id];
        state.error = action.payload;
      })
      .addCase(bulkDeleteItems.pending, (state, action) => {
        state.loading.bulk = true;
        state.error = null;
      })
      .addCase(bulkDeleteItems.fulfilled, (state, action) => {
        state.loading.bulk = false;
        state.cartData = state.cartData.filter(
          (item) => !action.payload.includes(item.id),
        );
        state.error = null;
      })
      .addCase(bulkDeleteItems.rejected, (state, action) => {
        state.loading.bulk = false;
        state.error = action.payload;
      });
  },
});

export default CartSlice.reducer;
