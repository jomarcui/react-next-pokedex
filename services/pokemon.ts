// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonSprites } from "../interfaces/Pokemon/Pokemon";

const BASE_URI = "https://pokeapi.co/api/v2/";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (limit) => `pokemon?limit=${limit}&offset=0`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery, useGetPokemonByNameQuery } = pokemonApi;
