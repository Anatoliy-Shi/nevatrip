import { configureStore } from '@reduxjs/toolkit'
import selected from "./slice/selectedSlice";

export default configureStore({
    reducer: {
        selected
    }
})