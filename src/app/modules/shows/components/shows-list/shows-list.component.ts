import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@core/store/state/app.state';
import { Observable } from 'rxjs';
import { IShow } from '@shared/interfaces/show.interface';
import { GetShows, ISortPayload } from '@core/store/actions/show.actions';
import { SortButtonComponent } from '@shared/components/sort-button/sort-button.component';
import { map } from 'rxjs/operators';
import { processSorting } from '@core/store/helpers/process-sorting.helper';
import { IFilterFieldParams } from '@sharedInterfaces/show.interface';

@Component({
  selector: 'shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: [ './shows-list.component.scss' ]
})
export class ShowsListComponent implements OnInit {

  @ViewChildren(SortButtonComponent) sortButtons: QueryList<SortButtonComponent>;

  public itemsPerPage: number = 5;
  public currentPage: number = 0;
  public shows$: Observable<IShow[]> = this.store.pipe(select(state => state.shows.shows.content));
  public filteredShows$: Observable<IShow[]>;
  public filters: IFilterFieldParams[] = [];
  public dates: Observable<Date[]>;
  public genres: Observable<string[]>;

  @ViewChildren('someVar') filteredItems;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.getShowsPage(0);
    this.filteredShows$ = this.shows$.pipe(map((shows) => shows));
    this.dates = this.extractDataFromShows('premiereDate');
    this.genres = this.extractDataFromShows('genre');
  }

  extractDataFromShows(fieldName: string): Observable<any>  {
    return this.shows$.pipe(
      map(shows => this.getUnique(shows.map(show => show[fieldName])))
    );
  }

  getUnique(arr: any[]) {
    return arr.filter((item, id, self) => self.indexOf(item) === id);
  }

  public filterShows(newFilter) {
    const searchResult = this.filters.find(filter => filter.fieldName === newFilter.fieldName);

    if (!searchResult) this.filters.push(newFilter);

    this.filters = this.filters.map(filter => {
      if (filter.fieldName === newFilter.fieldName) {
        return newFilter;
      }
      return filter;
    });

    this.filteredShows$ = this.shows$.pipe(
      map(shows =>
        this.filters.reduce((cumulShows, field) =>
          cumulShows.filter(singleItem =>
            singleItem[field.fieldName].toString().toLowerCase().includes(field.fieldValue.toString().toLowerCase())
          ), shows)
      ));
  }

  public addSortField(sortPayload: ISortPayload): void {
    const { fieldName, group } = sortPayload;
    this.filteredShows$ = processSorting(sortPayload, this.filteredShows$);
    if (!group) this.resetSortButtonsExcept(fieldName);
  }

  private resetSortButtonsExcept(fieldName: string): void {
    this.sortButtons.forEach((sortButton: SortButtonComponent) => {
      if (fieldName !== sortButton.fieldName && sortButton.sortDirection !== null) sortButton.setDefaultState();
    });
  }

  private getShowsPage(pageNumber: number): void {
    this.store.dispatch(new GetShows());
  }

  public onChangePage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  public changeItemsCountOnPage(itemsPerPage): void {
    this.itemsPerPage = itemsPerPage;
  }

}
