import { Routes } from '@angular/router';

import { HomesComponent } from './pages/homes/homes.component';
import { LabsComponent } from './pages/labs/labs.component';

export const routes: Routes = [
    {
        path: '',
        component: HomesComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    }
];
