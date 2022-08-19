import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { petsReducers } from "features/pets/petsSlice";

const reducer = combineReducers({
    pets: petsReducers,
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
        }),
    devTools: process.env.NODE_ENV === "development",
});

export default store;
