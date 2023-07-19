import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import showcasesReducer from "./showcases";
import productsdReducer from "./products";
import classifireProductsReducer from "./classifireProducts";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
  user: userReducer,
  showcases: showcasesReducer,
  products: productsdReducer,
  classifireProducts: classifireProductsReducer,
  categories: categoriesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
