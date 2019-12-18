import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsRoutingModule } from '@modules/shows/shows-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ShowsListComponent } from '@modules/shows/components/shows-list/shows-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [ShowsListComponent, FilterBarComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
  entryComponents: []
})
export class ShowsModule { }
