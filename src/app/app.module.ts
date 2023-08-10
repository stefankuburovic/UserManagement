import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserQuery} from "./state/user/user.query";
import {UserService} from "./state/user/user.service";
import {UserStore} from "./state/user/user.store";
import {UserTableComponent} from "./components/user-table/user-table.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";
import {environment} from "./enviroments/enviroment";
import {AddUserModalComponent} from "./components/add-user-modal/add-user-modal.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, UserTableComponent, AddUserModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    // Akita devtools setup (if applicable)
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [UserStore, UserService, UserQuery],
  bootstrap: [AppComponent],
})
export class AppModule {}
