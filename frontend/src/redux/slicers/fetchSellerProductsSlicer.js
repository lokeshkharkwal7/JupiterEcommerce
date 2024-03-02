import { createSlice } from "@reduxjs/toolkit";
const productdata = {
    data : [],
    loading : true
}
const fetchProductsellercategory = createSlice({
    name : 'fetchProductSellerCategoryName',
    initialState:productdata, 
    reducers:{

        fetchSellerProductCategory(state , action){
            state.data = action.payload
        }

    }
})

export const {fetchSellerProductCategory} = fetchProductsellercategory.actions
export const fetchProductSellerCategoryReducer = fetchProductsellercategory.reducer