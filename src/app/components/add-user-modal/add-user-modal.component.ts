import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../state/user/user.service";
import {User} from "../../state/user/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
/**
 * Component for adding a new User via a modal.
 */
@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent {
  addUserForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserModalComponent>,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.addUserForm = this.fb.group({
      userName: ['', Validators.required],
    });
  }
  /**
   * Adds a new User to the store.
   * @param name - The name of the user to add.
   */
  addUser(): void {
    if (this.addUserForm.invalid) {
      return;
    }

    const userName = this.addUserForm.value.userName;

    const newUser: User = {
      id: new Date().getTime(),
      name: userName,
      active: false
    };
    this.userService.add(newUser);
    this.dialogRef.close();
  }
}
