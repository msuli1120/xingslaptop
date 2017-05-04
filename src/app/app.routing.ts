import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PcListComponent } from './pc-list/pc-list.component';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';

const appRoutes: Routes = [
{
    path: '',
    component: WelcomeComponent
},
{
   path: 'pc-list',
   component: PcListComponent
},
{
   path: 'add-laptop',
   component: AddLaptopComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
