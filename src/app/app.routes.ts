import {RecepieCreateComponent} from './recepie-create/recepie-create.component';
import {RecepieListComponent} from './recepie-list/recepie-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: 'recepies', pathMatch: 'full' },
    { path: 'recepies', component: RecepieListComponent },{ path: 'recepies/create', component: RecepieCreateComponent },];
