import { IStore } from "./types";

export const selectList = (state: {moviesReducer: IStore}): IStore['list'] => state.moviesReducer.list;

