import {initialShowState, IShowState} from '@core/store/state/show.state';

export interface IAppState {
  shows: IShowState;
}

export const initialAppState: IAppState = {
  shows: initialShowState,
};
