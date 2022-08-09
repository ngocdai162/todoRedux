import { addTodoSlice } from '../component/addTodo/AddTodoSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
       addTodo: addTodoSlice
    }
});
export default store;