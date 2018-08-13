import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Criteria} from '../models/criteria';

@Injectable({
  providedIn: 'root'
})

export class EvaluationService {

  private criteriaSource = new BehaviorSubject(this.setUpCriterias());
  currentCriteria = this.criteriaSource.asObservable();

  constructor() {

  }

  setCriterias(criterias) {
    this.criteriaSource.next(criterias);
  }

  setUpCriterias() {

    const criterias = [];

    criterias.push(new Criteria('p_l', 'P / L', undefined, undefined));
    criterias.push(new Criteria('p_vp', 'P / VP', undefined, undefined));
    criterias.push(new Criteria('p_ebit',  'P / EBIT', undefined, undefined));
    criterias.push(new Criteria('psr', 'PSR', undefined, undefined));
    criterias.push(new Criteria('p_ativos', 'P / Ativos', undefined, undefined));
    criterias.push(new Criteria('lpa',  'LPA', undefined, undefined));
    criterias.push(new Criteria('vpa', 'VPA', undefined, undefined));
    criterias.push(new Criteria('marg_bruta', 'Margem Bruta', undefined, undefined));
    criterias.push(new Criteria('marg_ebit', 'Margem Ebit', undefined, undefined));
    criterias.push(new Criteria('marg_liquida', 'Margem Líquida', undefined, undefined));
    criterias.push(new Criteria('roe', 'ROE', undefined, undefined));
    criterias.push(new Criteria('roic', 'ROIC', undefined, undefined));
    criterias.push(new Criteria('div_yield',  'Dividend Yield', undefined, undefined));
    criterias.push(new Criteria('liquidez_corr', 'Liquidez Corrente', undefined, undefined));
    criterias.push(new Criteria('div_br_patrim', 'Dívida Bruta / Patrimônio', undefined, undefined));
    criterias.push(new Criteria('cres_rec_5a', 'Crescimento da Receita (5 anos)', undefined, undefined));

    return criterias;

  }

}
