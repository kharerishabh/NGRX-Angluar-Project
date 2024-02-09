import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { decrement, increment } from './counter.actions';


@Injectable()
export class CounterEffects {
  saveCount = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement),
      tap((actions) => {
        console.log(actions);
        localStorage.setItem('Count', actions.value.toString());
      })
    ),
    {dispatch: false}
  );

  constructor(private actions$: Actions) {}
}
