import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/Authslices';
import courseReducer from './Slices/CourseSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
    },
    devTools: true
});

export default store;