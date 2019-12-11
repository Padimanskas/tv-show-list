import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Modal } from '@crystalui/angular-modal';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@core/store/state/app.state';
import { Observable } from 'rxjs';
import { IShow } from '@shared/interfaces/show.interface';
import { ApplySort, GetShows, ISortPayload } from '@core/store/actions/show.actions';
import { SortButtonComponent } from '@shared/components/sort-button/sort-button.component';


@Component({
  selector: 'shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: [ './shows-list.component.scss' ]
})
export class ShowsListComponent implements OnInit {

  @ViewChildren(SortButtonComponent) sortButtons: QueryList<SortButtonComponent>;

  @Input() itemsPerPage: number = 5;
  public currentPage: number = 0;

  public shows$: Observable<IShow[]> = this.store.pipe(select(state => state.shows.shows.content));
  public totalShows$: Observable<number> = this.store.pipe(select(state => state.shows.shows.content.length));

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.getShowsPage(0);
  }

  public addSortField(sortPayload: ISortPayload): void {
    const { fieldName, group } = sortPayload;
    this.store.dispatch(new ApplySort(sortPayload));
    this.getShowsPage(this.checkIsFirstPage() ? this.currentPage - 1 : this.currentPage);
    if (!group) this.resetSortButtonsExcept(fieldName);
  }

  private checkIsFirstPage(): boolean {
    return !!this.currentPage;
  }

  private resetSortButtonsExcept(fieldName: string): void {
    this.sortButtons.forEach((sortButton: SortButtonComponent) => {
      if (fieldName !== sortButton.fieldName && sortButton.sortDirection !== null) sortButton.setDefaultState();
    });
  }

  private getShowsPage(pageNumber: number): void {
    this.store.dispatch(new GetShows({ page: `${pageNumber}`, count: `${this.itemsPerPage}`, sort: [] }));
  }

  public onChangePage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getShowsPage(this.currentPage - 1);
  }

  public changeItemsCountOnPage(itemsPerPage): void {
    this.itemsPerPage = itemsPerPage;
  }

}
