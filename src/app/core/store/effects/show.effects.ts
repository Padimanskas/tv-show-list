import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { ShowsService } from '@core/services/shows.service';
import { Observable, of } from 'rxjs';
import {
  EShowActionTypes, ShowsLoadedSuccess, ShowsLoadedError, ShowsActions, IHttpRequestParams
} from '@core/store/actions/show.actions';
import { IShowResponse } from '@shared/interfaces/show.interface';
import { ResponseHandlingHelper } from '@core/store/helpers/response-handling.helper';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@core/store/state/app.state';
import { withLatestFrom } from "rxjs/operators";

@Injectable()
export class ShowEffects {

  @Effect()
  public loadShows$: Observable<any> = this.actions$
    .pipe(
      ofType(<string>EShowActionTypes.GetShows),
      map((action: ShowsActions) => action.payload),
      withLatestFrom(<any>this.store$.pipe(select(state => state.shows.shows.sort))),
      switchMap(([ payload, sort ]: [ IHttpRequestParams, string[][] ]) => this.showsService.getShows(
        payload.page,
        payload.count,
        sort
        ).pipe(
        map((showsResponse: IShowResponse) => new ShowsLoadedSuccess(showsResponse.payload)),
        catchError(error => <never>of(new ShowsLoadedError(error)))
        )
      )
    );

  @Effect({ dispatch: false })
  public loadShowsError$: Observable<any> = this.actions$.pipe(
    ofType(<string>EShowActionTypes.ShowsLoadedError),
    map((error: ShowsLoadedError) => error.payload.status),
    tap(status => this.responseHandler.switchToErrorPage(status), null, null)
  );

  constructor(private actions$: Actions, private showsService: ShowsService, private responseHandler: ResponseHandlingHelper, private store$: Store<IAppState>) {
  }
}
