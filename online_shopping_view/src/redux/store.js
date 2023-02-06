import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { productApi } from './features/productsApi'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware)
    }
})