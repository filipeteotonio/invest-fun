import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Company} from '../models/company';
import {NotificationService} from './notificationService';
declare var $: any;
@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  url = 'http://localhost:9080/crawl.json?spider_name=fundamentus&' +
        'url=http://www.fundamentus.com.br/detalhes.php?papel=MEU-PAPEL&x=35&y=11' +
        '&callback=parse&max_requests=5';


  private companySource = new BehaviorSubject(new Company());
  currentCompany = this.companySource.asObservable();

  private companyFoundSource = new BehaviorSubject(false);
  isCompanyFound = this.companyFoundSource.asObservable();

  constructor(private http: HttpClient, private notificationService: NotificationService) {
  }

  getCompanyByPaper(paper) {
    const paperUrl = this.url.replace('MEU-PAPEL', paper);

    this.http.get(paperUrl).subscribe((result) => {
      // console.log(result['items'][0]);

      if (result['items'].length === 0) {
          this.notificationService.show('top', 'center', 4, 'Não foi possível encontrar a empresa \''
              + paper + '\'. Certifique-se de que este papel existe e tente novamente.');

          return;
      }


      this.companySource.next(result['items'][0]);
      this.companyFoundSource.next(true);
    });
  }

}
