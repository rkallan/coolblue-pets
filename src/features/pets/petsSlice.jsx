import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: undefined,
};

const pets = createSlice({
    name: "petsSearch",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            const tempState = state;
            const searchValue = action.payload;

            tempState.value = searchValue;

            return tempState;
        },
        resetPets: () => {
            const newState = initialState;

            return newState;
        },
    },
});

const { resetPets, setSearchValue } = pets.actions;
const petsReducers = pets.reducer;

export { resetPets, setSearchValue, petsReducers };
