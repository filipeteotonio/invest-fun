import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../services/evaluation.service';
import {Criteria} from '../models/criteria';

@Component({
  selector: 'app-user-profile',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  criterias = [Criteria];
  constructor(private evalService: EvaluationService) {
    this.evalService.currentCriteria.subscribe(criterias => {
      this.criterias = criterias;
    })
  }

  ngOnInit() {



  }

}
