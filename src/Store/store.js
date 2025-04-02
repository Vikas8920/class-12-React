import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./addToCart";

export default configureStore({
    reducer:{
      cart: addToCartReducer
    }
})