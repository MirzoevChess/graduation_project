import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products/all",
      transformResponse: (response) =>
        response.map((product) => ({
          ...product,
          fullImageUrl: `${API_URL}${product.image}`,
        })),
    }),

    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
      transformResponse: (response) => {
        const product = response[0]; 
        return {
          ...product,
          fullImageUrl: `${API_URL}${product.image}`,
        };
  },
    }),
    getProductsByCategory: builder.query({
      query: (categoryId) => `/categories/${categoryId}`,
      transformResponse: (response) => ({
        category: response.category,
        // products: response.data.map((product) => ({
        //   ...product,
        //   fullImageUrl: `${API_URL}${product.image}`,
        // })),
        products: Array.isArray(response.data)
          ? response.data.map((product) => ({ ...product, fullImageUrl: `${API_URL}${product.image}` }))
          : [],
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
