import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { IShowPayload, IShowResponse } from '@shared/interfaces/show.interface';

export interface IHttpRequestParams {
  page: string;
  count: string;
  sort: string[][];
}

export interface ISortPayload {
  fieldName: string;
  sortDirection: string;
  group: boolean;
}

export interface IActionWithPayload extends Action {
  payload?: IShowPayload | IShowResponse | HttpErrorResponse | IHttpRequestParams | ISortPayload;
}

export enum EShowActionTypes {
  GetShows = '[Shows API] Get Shows',
  ShowsLoadedSuccess = '[Shows API] Shows Loaded Success',
  ShowsLoadedError = '[Shows API] Shows Loaded Error',
  ApplySort = '[Shows API] Apply Sort',
}

export class GetShows implements IActionWithPayload {
  public readonly type = <string>EShowActionTypes.GetShows;

  constructor(public payload: IHttpRequestParams) {}
}

export class ShowsLoadedSuccess implements IActionWithPayload {
  public readonly type = <string>EShowActionTypes.ShowsLoadedSuccess;

  constructor(public payload: IShowPayload) {}
}

export class ShowsLoadedError implements IActionWithPayload {
  public readonly type = <string>EShowActionTypes.ShowsLoadedError;

  constructor(public payload: IShowResponse | HttpErrorResponse) {}
}

export class ApplySort implements IActionWithPayload {
  public readonly type = <string>EShowActionTypes.ApplySort;

  constructor(public payload: ISortPayload) {}
}

export type ShowsActions = GetShows | ShowsLoadedSuccess | ShowsLoadedError | ApplySort;
