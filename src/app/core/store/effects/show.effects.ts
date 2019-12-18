import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {map, tap, switchMap, catchError, withLatestFrom} from 'rxjs/operators';
import { ShowsService } from '@core/services/shows.service';
import { Observable, of } from 'rxjs';
import {
  EShowActionTypes,
  ShowsLoadedSuccess,
  ShowsLoadedError,
  ShowsActions,
  IHttpRequestParams,
  ISortPayload,
  GetShows,
  SortingComplete, FilterComplete, IFilterPayload, ApplyFilter
} from '@core/store/actions/show.actions';
import { IShow, IShowResponse } from '@shared/interfaces/show.interface';
import { ResponseHandlingHelper } from '@core/store/helpers/response-handling.helper';
import { select, State, Store } from '@ngrx/store';
import { IAppState } from '@core/store/state/app.state';
import { processSorting } from '@core/store/helpers/process-sorting.helper';
import { processFilter } from '@core/store/helpers/process-filter.helper';

@Injectable()
export class ShowEffects {

  @Effect()
  public loadShows$: Observable<ShowsActions> = this.actions$
    .pipe(
      ofType(EShowActionTypes.GetShows),
      switchMap((payload: IHttpRequestParams) => this.showsService.getShows().pipe(
        map((showsResponse: IShowResponse) => new ShowsLoadedSuccess(showsResponse.payload)),
        catchError(error => of(new ShowsLoadedError(error)))
        )
      )
    );

/*  @Effect()
  public sortShows$: Observable<ShowsActions> = this.actions$
    .pipe(
      ofType(EShowActionTypes.ApplySort),
      withLatestFrom(this.store$.select(state => state.shows.shows.content)),
      map(([action, shows]: [ShowsActions, IShow[]]): ShowsActions =>
        new SortingComplete(processSorting(<ISortPayload>action.payload, shows))
      )
    );*/

  @Effect()
  public filterShows$: Observable<ShowsActions> = this.actions$
    .pipe(
      ofType(EShowActionTypes.ApplyFilter),
      tap(res => this.store$.dispatch(new GetShows())),
      withLatestFrom(this.store$.select(state => state.shows.shows.content)),
      map(([action, shows]: [ShowsActions, IShow[]]) =>
        new FilterComplete(processFilter(<IFilterPayload>action.payload, shows))
      )
    );

  @Effect({ dispatch: false })
  public loadShowsError$: Observable<any> = this.actions$.pipe(
    ofType(EShowActionTypes.ShowsLoadedError),
    map((error: ShowsLoadedError) => error.payload.status),
    tap(status => this.responseHandler.switchToErrorPage(status))
  );

  constructor(
    private actions$: Actions,
    private showsService: ShowsService,
    private responseHandler: ResponseHandlingHelper,
    private store$: Store<IAppState>
  ) { }
}
