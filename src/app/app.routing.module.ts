import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from "./departments/departments.component";
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentsComponent},
  {path: '', redirectTo: 'departments', pathMatch: 'full'},
  {path: 'user/:id', component: EmployeesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
