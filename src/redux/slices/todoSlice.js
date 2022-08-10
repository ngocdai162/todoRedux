import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos : [],
}
const  addTodoSlice = createSlice(
    {
        name: "addTodo",
        initialState, 
        reducers: {
            addTodo (state,action) {
                state.todos.push(action.payload)
            },
            deleteTodo(state, action) {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            },
        }
    }
);
export const {addTodo,deleteTodo} = addTodoSlice.actions;
export default addTodoSlice.reducer;
/*  tự động tạo ra actions addtodo
{name: 'addTodo', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
actions:
addTodo: ƒ actionCreator()
[[Prototype]]: Object
caseReducers: {addTodo: ƒ}
getInitialState: ƒ ()
name: "addTodo"
reducer: ƒ (state, action)
[[Prototype]]: Object
*/
