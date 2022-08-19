import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: undefined,
    loading: "idle",
    currentRequestId: undefined,
    error: undefined,
};

const pets = createSlice({
    name: "pets",
    initialState,
    reducers: {
        resetPets: () => {
            const newState = initialState;

            return newState;
        },
    },
});

const { resetPets } = pets.actions;
const petsReducers = pets.reducer;

export { resetPets, petsReducers };
