import { createSlice } from "@reduxjs/toolkit";


export const rootReducer = createSlice(
    {
        name: "reducerStore",
        initialeState: {
            id: "",
            name: ""
        },
        reducers: {
            addTodo: (state,action) => {
                console.log(action.payload)
                state.push(action.payload);
            }
        }
    }
);