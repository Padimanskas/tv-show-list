import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { ShowsService } from '@core/services/shows.service';
import { Observable, of } from 'rxjs';
import {
  EShowActionTypes,
  ShowsLoadedSuccess,
  ShowsLoadedError,
  ShowsActions,
  IHttpRequestParams,
} from '@core/store/actions/show.actions';
import { IShowResponse } from '@shared/interfaces/show.interface';
import { ResponseHandlingHelper } from '@core/store/helpers/response-handling.helper';
import { Store } from '@ngrx/store';
import { IAppState } from '@core/store/state/app.state';

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
