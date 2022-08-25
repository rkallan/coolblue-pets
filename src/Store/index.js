import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { petsReducers } from "features/pets/petsSlice";
import { petsApi } from "features/pets/petsApi";

const reducer = combineReducers({
    [petsApi.reducerPath]: petsApi.reducer,
    petsSearch: petsReducers,
});

const rootReducer = (state, action) => {
    if (action.type === "authentication/resetAuth") return reducer(undefined, action);

    return reducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: true,
        }).concat(petsApi.middleware),
    devTools: process.env.NODE_ENV === "development",
});

export default store;
