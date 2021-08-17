import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  
    { path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'}},
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'}},
      { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1'}},
      { path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Ajustes de la cuenta'}},
      { path: 'promesa', component: PromesaComponent, data: { titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'}},      
    ]
    },    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
