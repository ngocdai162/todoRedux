import { createSelector } from "@reduxjs/toolkit";

export const todoSelector=(state) => {
    console.log(state)
    return  state.addTodo.todos.filter((todos) => todos.name.includes(state.filter.searchText)); 
    // Trả vè todoSelector chứa kí tự search 
}
