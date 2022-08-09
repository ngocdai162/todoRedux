import { createSlice } from "@reduxjs/toolkit";

export const  addTodoSlice = createSlice(
    {
        name: "addTodo",
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