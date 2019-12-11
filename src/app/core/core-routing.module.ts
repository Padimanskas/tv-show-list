import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { ErrorPageComponent } from '@core/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/shows',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: HomeComponent,
    children: [
      {
        path: 'shows',
        loadChildren: '@app/modules/shows/shows.module#ShowsModule'
      }
    ]
  },
  {
    path: 'error-page',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '/app/shows'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {
}
