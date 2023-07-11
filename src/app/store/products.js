import { createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";

const initialState = {
  entities: [],
  isLoading: true,
  error: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true;
    },
    productsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    productsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: productsdReducer, actions } = productsSlice;
const { productsRequested, productsReceved, productsRequestFiled } = actions;

export const loadProductsList = () => async (dispatch, getState) => {
  dispatch(productsRequested());
  try {
    const data = await productService.fetchAll();
    dispatch(productsReceved(data));
  } catch (error) {
    dispatch(productsRequestFiled(error.message));
  }
};

export const getProducts = () => (state) => state.products.entities;
export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading;

export default productsdReducer;
