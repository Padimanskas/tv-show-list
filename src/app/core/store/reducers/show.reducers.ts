import { ShowsActions, EShowActionTypes } from '@core/store/actions/show.actions';
import { initialShowState, IShowState } from '@core/store/state/show.state';

export const ShowReducer = (state = initialShowState, action: ShowsActions): IShowState => {

  switch (action.type) {

    case EShowActionTypes.GetShows:
      return state;
    case EShowActionTypes.ShowsLoadedSuccess: {
      return <IShowState>{
        ...state,
        shows: action.payload
      };
    }

    default:
      return state;
  }

};
