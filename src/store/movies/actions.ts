import { Dispatch } from "redux";
import getMovies from "services/getMovies";

import { IStore } from "./types";

export const setMoviesAction = (list: IStore ['list']) => {
   return {
      type: 'movies/setMovies',
      payload: list
   }
}

export const loadMovies  = () => async (dispatch: Dispatch) => {
   try {
      const response = await getMovies();

      dispatch(setMoviesAction(response.data));

   }catch (e) {
      console.log(e, 'error');
   }
}


