import { configureStore } from "@reduxjs/toolkit";
import { slicerFetchProduct } from "./slicers/fetchProductSlicer";
import { FetchProductReducer } from "./slicers/fetchProductSlicer";
import { cartSlicerRecucer } from "./slicers/cartSlicer";
import { userInfoReducer } from "./slicers/fetchUserInfo";
export const store = configureStore(
  {
  reducer:  // all the reducer are
  {
    fetchProductsSlicerName : FetchProductReducer ,  // CHANGED  fetchProductsSlicerName  fetchProducts
    cartSlicerName : cartSlicerRecucer,
    UserInfoSlicer: userInfoReducer
    
    // Here the imported slicerFetchProduct is the actual slicer while the 
    // fetchProdcutSlicerName which is the key is the name that we passed to the acutal slicer
  }
}
)

