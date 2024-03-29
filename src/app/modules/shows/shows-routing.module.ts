import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsListComponent } from '@app/modules/shows/components/shows-list/shows-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShowsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
