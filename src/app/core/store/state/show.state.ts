import { IShowPayload } from '@shared/interfaces/show.interface';

export interface IShowState {
  shows: IShowPayload;
}

export const initialShowState: IShowState = {
  shows: <IShowPayload>{
    content: [],
    filter: {},
    first: true,
    last: false,
    number: 0,
    size: 5,
    sort: [],
    totalElements: 0,
    totalPages: 0
  }
};
