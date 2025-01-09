import {configureStore} from '@reduxjs/toolkit'

import storageSession from 'redux-persist/lib/storage/session';

import {persistReducer, persistStore} from 'redux-persist';

import { rootReducer } from './root';




const persistConfig = {
    key :"pharmacy",
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer :persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware ({
            serializableCheck:false
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof persistReducer>