import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Company} from '../models/company';
import {CompanyService} from '../services/company.service';
import {EvaluationService} from '../services/evaluation.service';
import {TitleService} from '../services/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  isCompanyFound = false;
  company: Company;
  constructor(private router: Router, private titleService: TitleService,
              private companyService: CompanyService) {


    this.companyService.currentCompany.subscribe((company) => {
        this.company = company;
        // console.log(this.company);
    });

    this.companyService.isCompanyFound.subscribe((found) => {
      this.isCompanyFound = found;
    });


  }

  ngOnInit() {
    this.titleService.setTitle('Visão Geral');
  }

  callEvaluation() {
    this.router.navigate(['evaluation']);
  }

}
