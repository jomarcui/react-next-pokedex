import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Interfaces from "../interfaces";
import { IPokemon } from "../interfaces/Pokemon/Pokemon";

const initialState: Interfaces.IPokemonState = {
  pokemonList: [],
  value: 0,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    getAll: (state, action: PayloadAction<IPokemon[]>) => {
      return {
        ...state,
        pokemonList: action.payload,
      };
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, getAll, incrementByAmount } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
