import { IStore } from "./types";

export const selectList = (state: {kategoriesReducer: IStore}): IStore['list'] => state.kategoriesReducer.list;
