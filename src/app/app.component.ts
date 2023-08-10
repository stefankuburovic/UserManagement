import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { UserQuery } from './state/user/user.query';
import {User} from "./state/user/user.model";
/**
 * Root component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog, private userQuery: UserQuery) {}

  /**
   * Opens the Add User modal.
   */
  openAddUserModal():void {
    const dialogConfig: MatDialogConfig<AddUserModalComponent> = new MatDialogConfig();

    // Customize the appearance of the dialog
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.backdropClass = 'custom-dialog-backdrop';
    dialogConfig.width = '30vw';
    dialogConfig.height = '20vh';

    this.dialog.open(AddUserModalComponent, dialogConfig);
  }

  /**
   * Checks if a new user can be added.
   * @returns True if conditions for adding a user are met, otherwise false.
   */
  canAddUser(): boolean {
    const activeUsers: User[] = this.userQuery.getAll({ filterBy: (user) => user.active });
    return activeUsers.length === this.userQuery.getCount() && activeUsers.length < 5;
  }
}
