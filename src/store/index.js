import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import discountReducer from "./features/discountSlice"
import  productsReduser from "./features/productsSlice"

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    discount: discountReducer,
     products: productsReduser,
  },
});

export default store;
