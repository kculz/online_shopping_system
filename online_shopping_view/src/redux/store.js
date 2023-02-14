import {configureStore} from '@reduxjs/toolkit'
import { productApi } from './features/productsApi'
import { usersApi } from './features/usersApi'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware, usersApi.middleware)
    }
})