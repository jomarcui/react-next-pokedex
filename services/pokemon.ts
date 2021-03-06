// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonSprites } from "../interfaces/Pokemon/Pokemon";

const BASE_URI = "https://pokeapi.co/api/v2/";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    getEvolutions: builder.query({
      query: (id) => `evolution-chain/${id}`,
    }),
    getPokemon: builder.query({
      query: ({ limit, pageNumber }) =>
        `pokemon/?limit=${limit}&offset=${pageNumber}`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getSpecie: builder.query({
      query: (id) => `pokemon-species/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetEvolutionsQuery,
  useGetPokemonQuery,
  useGetPokemonByNameQuery,
  useGetSpecieQuery,
} = pokemonApi;
