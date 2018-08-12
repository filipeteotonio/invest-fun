import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Company} from '../models/company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  url = 'http://localhost:9080/crawl.json?spider_name=fundamentus&' +
        'url=http://www.fundamentus.com.br/detalhes.php?papel=MEU-PAPEL&x=35&y=11' +
        '&callback=parse&max_requests=5';


  private companySource = new BehaviorSubject(new Company());
  currentCompany = this.companySource.asObservable();

  constructor(private http: HttpClient) {
  }

  getCompanyByPaper(paper) {
    const paperUrl = this.url.replace('MEU-PAPEL', paper);

    this.http.get(paperUrl).subscribe((result) => {
      // console.log(result['items'][0]);
      this.companySource.next(result['items'][0]);
    });
  }

}
