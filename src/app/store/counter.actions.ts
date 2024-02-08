import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
)

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
)
//Alternative way of creating actions
// export const INCREMENT = '[Counter] Increment'
// export class IncrementAction implements Action{
//     type = INCREMENT
//     constructor(public value: number){}
// }

// export type CounterActions = IncrementAction;