import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const initialState = {
  entities: [],
  isLoading: true,
  error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    categoriesReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoriesRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequested, categoriesReceved, categoriesRequestFiled } =
  actions;

export const loadCategoriesList = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const data = await categoryService.fetchAll();
    dispatch(categoriesReceved(data));
  } catch (error) {
    dispatch(categoriesRequestFiled(error.message));
  }
};

export const getcategories = () => (state) => state.categories.entities;
export const getcategoriesLoadingStatus = () => (state) =>
  state.categories.isLoading;

export default categoriesReducer;
