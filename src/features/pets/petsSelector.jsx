import { createSelector } from "@reduxjs/toolkit";

const getPetsSearch = ({ petsSearch }) => petsSearch;

const getPetsSearchValue = createSelector(getPetsSearch, (petsSearch) => petsSearch.value || "");

export { getPetsSearch, getPetsSearchValue };
