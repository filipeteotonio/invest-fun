import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Company} from '../models/company';
import {NotificationService} from './notificationService';
declare var $: any;
@Injectable({
  providedIn: 'root'
})

export class TitleService {

  private titleSource = new BehaviorSubject('Visão Geral');
  currentTitle = this.titleSource.asObservable();

  constructor() {
  }

  setTitle(title) {
    this.titleSource.next(title);
  }

}
