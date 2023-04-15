import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
   list: [],
}

const kategoriesReducer = (state: IStore = initialState, action: AnyAction) => {
   switch(action.type) {
      case 'kategories/setKategories':
         return {...state, list: [...action.payload]}
      default:
         return state;
   }
} 

export default kategoriesReducer;