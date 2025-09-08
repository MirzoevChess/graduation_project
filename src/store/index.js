import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import discountReducer from "./features/discountSlice"
import { productsApi } from "./features/productsAPI";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    discount: discountReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
