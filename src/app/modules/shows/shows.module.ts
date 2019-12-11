import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsRoutingModule } from '@modules/shows/shows-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ShowsListComponent } from '@modules/shows/components/shows-list/shows-list.component';
import { ModalModule } from '@crystalui/angular-modal';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ShowsListComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    SharedModule,
    ModalModule,
    NgxPaginationModule
  ],
  entryComponents: []
})
export class ShowsModule { }
