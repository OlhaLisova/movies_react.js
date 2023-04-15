import moviesReducer from 'store/movies/reducer';
import {AnyAction} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

type ReduxState = ReturnType<typeof moviesReducer>;

export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
