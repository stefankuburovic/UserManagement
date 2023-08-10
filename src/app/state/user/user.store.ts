import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {User} from "./user.model";
import {Injectable} from "@angular/core";

/**
 * Represents the state of User entities.
 */
export interface UserState extends EntityState<User> {}

@Injectable({providedIn: "root"})
@StoreConfig({name: "users"})
export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    super();
  }
}
