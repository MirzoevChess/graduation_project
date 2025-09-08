import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/categories/all`
    );

    if (!response.ok) {
      throw new Error("Categories not found");
    }

    const data = await response.json();

    return data.map((cat) => ({
      ...cat,
      fullImageUrl: `${import.meta.env.VITE_APP_API_URL}${cat.image}`,
    }));
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
