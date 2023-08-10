import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../../state/user/user.model";
import {UserService} from "../../state/user/user.service";
import {UserQuery} from "../../state/user/user.query";

/**
 * Component to display a table of User entities and handle user interactions.
 */
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  /**
   * Observable containing an array of User entities.
   */
  users$: Observable<User[]> | undefined;
  constructor(private userService: UserService, private userQuery: UserQuery) {
    this.users$ = this.userQuery.selectAll();
  }
  toggleActive(user: User): void {
    this.userService.update(user.id, {active: !user.active});
  }
  ngOnInit(): void {}
}
