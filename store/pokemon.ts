import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemon";
import pokemonReducer from "../slices/pokemonSlice";

export const pokemonStore = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof pokemonStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof pokemonStore.dispatch;
