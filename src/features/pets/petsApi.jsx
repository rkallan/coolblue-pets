import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const petsApi = createApi({
    reducerPath: "pets",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PETS_API }),
    endpoints: (builder) => ({
        getAllPets: builder.query({
            query: () => `pets`,
            transformResponse: (response) => {
                const { pets } = response;
                const petsResponse = pets.reduce((currentData, currentItem) => {
                    const tempData = currentData;
                    const { available, birthYear, dateAdded, id, name, photo, species } = currentItem;
                    const dateFormatted = dateAdded.split("-").reverse().join("-");
                    const date = new Date(dateFormatted);
                    const imageUrl = photo.split(":").reverse()[0];
                    const pet = {
                        id,
                        name,
                        species: species.toLowerCase(),
                        imageUrl,
                        birthYear,
                        dateAdded: date,
                        available: available.toLowerCase() === "yes",
                    };

                    tempData[id] = {
                        ...pet,
                    };

                    return tempData;
                }, {});

                return petsResponse;
            },
        }),
    }),
});

const { useGetAllPetsQuery } = petsApi;

export { petsApi, useGetAllPetsQuery };
