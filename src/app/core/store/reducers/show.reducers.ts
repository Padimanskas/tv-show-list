import { ShowsActions, EShowActionTypes } from '@core/store/actions/show.actions';
import { initialShowState, IShowState } from '@core/store/state/show.state';
import { processSorting } from '@core/store/helpers/process-sorting.helper';

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

    case EShowActionTypes.ApplySort:
      return Object.assign({}, state, {
        shows: {
          ...state.shows,
          sort: processSorting(state.shows.sort, action.payload)
        }
      });

    default:
      return state;
  }

};
