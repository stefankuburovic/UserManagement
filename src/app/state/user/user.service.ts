import {Injectable} from "@angular/core";
import {UserStore} from "./user.store";
import {User} from "./user.model";

@Injectable({providedIn: "root"})
export class UserService {
  constructor(private userStore: UserStore) {
    this.initializeUsers();
  }
  /**
   * Add a new User to the store.
   * @param user - The User entity to add.
   */

  private initializeUsers(): void {
    const initialUsers: User[] = [
      { id: 1, name: 'John', active: true },
      { id: 2, name: 'Alice', active: false },
      { id: 3, name: 'Bob', active: true },
    ];

    this.userStore.set(initialUsers);
  }

  add(user: User): void {
    this.userStore.add(user);
  }
  /**
   * Update an existing User in the store.
   * @param id - The ID of the User to update.
   * @param user - The partial User entity with updated values.
   */
  update(id: number, user: Partial<User>): void {
    this.userStore.update(id, user);
  }
}
