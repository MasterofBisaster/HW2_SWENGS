import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatNativeDateModule,
  MatInputModule,
  MatMenuModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule, MatSlideToggleModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {CpuListComponent} from './cpu-list/cpu-list.component';
import { LogoutComponent } from './logout/logout.component';
import { CPUFormComponent } from './cpu-form/cpu-form.component';
import {DateComponent} from './date/date.component';
import { OemListComponent } from './oem-list/oem-list.component';
import { OemFormComponent } from './oem-form/oem-form.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CpuListComponent,
    LogoutComponent,
    CPUFormComponent,
    DateComponent,
    OemListComponent,
    OemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
