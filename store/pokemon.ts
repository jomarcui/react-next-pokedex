import { configureStore } from "@reduxjs/toolkit";

export const pokemonStore = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof pokemonStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof pokemonStore.dispatch;