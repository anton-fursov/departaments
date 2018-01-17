import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  sub: Subscription;
  departmentId;
  employess;
  isLoaded = false;
  header;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.sub = Observable.combineLatest(this.route.params, this.apiService.getEmployees())
      .subscribe((data: any) => {
        this.departmentId = data[0].id;
        this.employess = data[1].filter(el => el.departmentId === +this.departmentId);
        this.header = this.employess[0].departmentName;
        this.isLoaded = true;
      });
  }

}
