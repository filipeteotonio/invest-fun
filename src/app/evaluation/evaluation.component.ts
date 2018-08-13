import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../services/evaluation.service';
import {Criteria} from '../models/criteria';
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  company: any;
  isCompanyFound: boolean;
  criterias = [Criteria];

  approvedCriterias = [];
  failedCriterias = [];

  constructor(private evalService: EvaluationService, private companyService: CompanyService) {
    this.evalService.currentCriteria.subscribe(criterias => {
      this.criterias = criterias;
    });

    this.companyService.currentCompany.subscribe((company) => {
      this.company = company;
    });

    this.companyService.isCompanyFound.subscribe((found) => {
        this.isCompanyFound = found;
    });
  }

  ngOnInit() {



  }

  evaluate() {

    const usedCriterias = this.getUsedCriterias();
    for (const criteria of usedCriterias) {
        // criteria['approved'] = this.evaluateCriteria(criteria, this.company.fundamentals[criteria['attr']]);
        if (this.evaluateCriteria(criteria, this.company.fundamentals[criteria['attr']])) {
          criteria['approved'] = true;
          criteria['c_value'] = this.company.fundamentals[criteria['attr']];
        }
    }


    this.approvedCriterias = usedCriterias.filter(criteria => criteria['approved'] === true);
    this.failedCriterias   = usedCriterias.filter(criteria => criteria['approved'] === false);

  }

  evaluateCriteria(criteria, companyAttr) {

    companyAttr = this.parseValues(criteria, companyAttr);

    if (criteria['max_val'] !== null && criteria['min_val'] !== null) {
      return  companyAttr >= criteria['min_val'] && companyAttr <= criteria['max_val'];
    }

    if (criteria['max_val'] === null && criteria['min_val'] !== null) {
        return  companyAttr >= criteria['min_val'];
    }

    if (criteria['max_val'] !== null && criteria['min_val'] === null) {
        return  companyAttr <= criteria['max_val'];
    }

  }

  parseValues(criteria, companyAttr) {

      companyAttr = companyAttr.replace('%', '').replace(',', '.');
      companyAttr = parseFloat(companyAttr);

      if (criteria['min_val'] !== null && criteria['min_val'] !== undefined) {
          criteria['min_val'] = parseFloat(criteria['min_val'].toString().replace(',', '.'));
      } else {
          criteria['min_val'] = null;
      }

      if (criteria['max_val'] !== null && criteria['max_val'] !== undefined) {
          criteria['max_val'] = parseFloat(criteria['max_val'].toString().replace(',', '.'));
      } else {
          criteria['max_val'] = null;
      }

      return companyAttr;
  }

  getUsedCriterias() {
      return this.criterias.filter(criteria => criteria['max_val'] !== undefined || criteria['min_val'] !== undefined);
  }

}
