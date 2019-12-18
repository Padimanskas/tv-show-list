import { IShowPayload } from '@shared/interfaces/show.interface';

export interface IShowState {
  shows: IShowPayload;
}

export const initialShowState: IShowState = {
  shows: <IShowPayload>{
    content: [],
  }
};
