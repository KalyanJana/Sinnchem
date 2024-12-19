import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './reducer/ProductsReducer'


export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (mid)=> [
        ...mid(),
    ]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch