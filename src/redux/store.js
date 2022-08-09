import { rootReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        reducerStore: rootReducer
    }
});
export default store;