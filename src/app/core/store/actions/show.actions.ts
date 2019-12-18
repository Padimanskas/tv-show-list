import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import {IShow, IShowPayload, IShowResponse} from '@shared/interfaces/show.interface';

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

export interface IFilterPayload {
  fieldName: string;
  filterQuery: string;
}

export interface IActionWithPayload extends Action {
  payload?: IShowPayload | IShowResponse | HttpErrorResponse | IHttpRequestParams | ISortPayload | IFilterPayload | IShow[];
}

export enum EShowActionTypes {
  GetShows = '[Shows API] Get Shows',
  ShowsLoadedSuccess = '[Shows API] Shows Loaded Success',
  ShowsLoadedError = '[Shows API] Shows Loaded Error',
  ApplySort = '[Shows API] Apply Sort',
  SortingComplete = '[Shows API] Sorting Complete',
  ApplyFilter = '[Shows API] Apply Filter',
  FilterComplete = '[Shows API] Filter Complete'
}

export class GetShows implements Action {
  public readonly type = EShowActionTypes.GetShows;

  constructor(public payload?: any) {}
}

export class ShowsLoadedSuccess implements IActionWithPayload {
  public readonly type = EShowActionTypes.ShowsLoadedSuccess;

  constructor(public payload: IShowPayload) {}
}

export class ShowsLoadedError implements IActionWithPayload {
  public readonly type = EShowActionTypes.ShowsLoadedError;

  constructor(public payload: IShowResponse | HttpErrorResponse) {}
}

export type ShowsActions = GetShows | ShowsLoadedSuccess | ShowsLoadedError;
