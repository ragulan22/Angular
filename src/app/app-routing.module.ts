import { NgModule } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'department', component: DepartmentComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
