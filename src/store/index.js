import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import { productsApi } from "./features/productsAPI";
import discountReducer from "./features/discountSlice";

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
