import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { RegistrationWorkerComponent } from './registration-worker/registration-worker.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { JobComponent } from './job/job.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationUserComponent,
    RegistrationWorkerComponent,
    ScheduleComponent,
    JobComponent,
    UserProfileComponent,
    WorkerProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent },
      {path: 'login', component: LoginComponent},
      {path: 'job', component: JobComponent},
      {path: 'registration-user', component: RegistrationUserComponent},
      {path: 'registration-worker', component: RegistrationWorkerComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'worker-profile', component: WorkerProfileComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
