import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText:''
}
const  filterSlice = createSlice(
    {
        name: "filter",
        initialState: {
            searchText: ""
        },
        reducers: {
           searchTodo (state,action) {
            console.log(action.payload)
             state.searchText = action.payload
           }
        }
    }
    
);
export const {searchTodo} = filterSlice.actions;
export default filterSlice.reducer;