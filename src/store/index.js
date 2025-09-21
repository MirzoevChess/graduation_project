import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsAPI";
import categoriesReducer from "./features/categoriesSlice";
import discountReducer from "./features/discountSlice";
import favoritesReducer from "./features/favoritesSlice";


const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    categories: categoriesReducer,
    discount: discountReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
