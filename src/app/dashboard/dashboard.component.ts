import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../models/company';
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  company: Company;
  constructor(private router: ActivatedRoute, private companyService: CompanyService) {


    this.companyService.currentCompany.subscribe((company) => {
        this.company = company;
        // console.log(this.company);
    })


  }

  ngOnInit() {

  }

}
