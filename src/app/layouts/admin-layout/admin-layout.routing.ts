import { Routes } from '@angular/router';

import { GeneralInfoComponent } from '../../general-info/general.info.component';
import { EvaluationComponent } from '../../evaluation/evaluation.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {Company} from '../../models/company';

export const AdminLayoutRoutes: Routes = [
    { path: 'visao-geral',      component: GeneralInfoComponent },
    { path: 'avaliacao',   component: EvaluationComponent },
    // { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'notifications',  component: NotificationsComponent }
];
