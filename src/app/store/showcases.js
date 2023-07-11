import { createSlice } from "@reduxjs/toolkit";
import showcaseService from "../services/showcase.service";

const initialState = {
  entities: [],
  isLoading: true,
  error: null
};

const showcasesSlice = createSlice({
  name: "showcases",
  initialState,
  reducers: {
    showcasesRequested: (state) => {
      state.isLoading = true;
    },
    showcasesReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    showcasesRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: showcasesReducer, actions } = showcasesSlice;
const { showcasesRequested, showcasesReceved, showcasesRequestFiled } = actions;

export const loadShowcasesList = () => async (dispatch, getState) => {
  dispatch(showcasesRequested());
  try {
    const data = await showcaseService.fetchAll();
    dispatch(showcasesReceved(data));
  } catch (error) {
    dispatch(showcasesRequestFiled(error.message));
  }
};

export const getShowcases = () => (state) => state.showcases.entities;
export const getShowcasesLoadingStatus = () => (state) =>
  state.showcases.isLoading;

export default showcasesReducer;
