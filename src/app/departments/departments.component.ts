import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments;
  form: FormGroup;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getDepartments()
      .subscribe(res => {
        this.departments = res;
      });
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });
  }

  addDepartment() {
    this.apiService.addDemartment(this.form.value)
      .subscribe(() => this.updateData());
  }

  delete(id) {
    this.apiService.deleteDepartment(id).subscribe(() => this.updateData());
  }

  updateData() {
    this.apiService.getDepartments()
      .subscribe(res => {
        this.departments = res;
      });
  }


}
