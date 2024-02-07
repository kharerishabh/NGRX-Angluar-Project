import { createReducer } from "@ngrx/store";

const initialState = 0
// export const counterReducer = createReducer(initialState)

//Alternative way of creating reducer
export function counterReducer (state = initialState){
    return state;
}