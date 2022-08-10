import { configureStore } from '@reduxjs/toolkit';
import addTodoReducer from './slices/todoSlice';
import filterReducer from './slices/filterSlice'

const store = configureStore({
    reducer: {
       addTodo: addTodoReducer,
       filter: filterReducer,
    }
});
export default store;
