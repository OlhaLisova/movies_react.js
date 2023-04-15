import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
   list: [],
}

const moviesReducer = (state: IStore = initialState, action: AnyAction) => {
   switch(action.type) {
      case 'movies/setMovies':
         return {...state, list: [...action.payload]}
      default:
         return state;
   }
} 

export default moviesReducer;