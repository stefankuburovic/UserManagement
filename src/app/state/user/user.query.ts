import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { UserState, UserStore } from './user.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState, User> {
  constructor(protected override store: UserStore) {
    super(store);
  }
}
