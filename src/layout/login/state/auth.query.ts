import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {AuthState, AuthStore} from "./auth.store";
import {map, Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  selectName$: Observable<string | null> = this.select('userName');
  selectIsLoggedIn$: Observable<boolean> = this.selectName$.pipe(map(name => !!name));

  constructor(protected override store: AuthStore) {
    super(store);
  }
}
