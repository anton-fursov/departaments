import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let hostname = '//ebsexpress-env.us-west-2.elasticbeanstalk.com';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(`${hostname}/users/employees`);

  }

  getDepartments() {
    return this.http.get(`${hostname}/users/departments`);
  }

  addDemartment(data) {
    return this.http.post(`${hostname}/users/departments`, data);
  }

  deleteDepartment(id) {
    return this.http.delete(`${hostname}/users/departments/${id}`);
  }

}
