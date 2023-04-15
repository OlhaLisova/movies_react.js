import { Dispatch } from "redux";
import getSearch from "services/getSearch";

import { IStore } from "./types";

export const setSearch = (list: IStore ['list']) => {
   return {
      type: 'kategories/setKategories',
      payload: list
   }
}

export const loadSearch  = (kategories: string) => async (dispatch: Dispatch) => {
   try {
      const response = await getSearch(kategories);

      dispatch(setSearch(response.data));

   }catch (e) {
      console.log(e, 'error');
   }
}

