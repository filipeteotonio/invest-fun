import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../services/company.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Visão Geral', icon: 'assignment', class: ''},
    {path: '/evaluation', title: 'Avaliação', icon: 'done_all', class: ''}
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    paper: string;

    constructor(private companyService: CompanyService) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };


    searchPaper() {

        if (!this.paper) {
            return;
        }

        this.companyService.getCompanyByPaper(this.paper);
    }

}
