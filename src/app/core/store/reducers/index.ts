import differ from 'deep-diff';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ShowReducer } from '@core/store/reducers/show.reducers';
import { IAppState } from '@app/core/store/state/app.state';

export const reducers: ActionReducerMap<any> = {
  shows: ShowReducer
};

export const metaReducers: MetaReducer<any>[] = [logger, /*localStorageReducer*/];

//////////////////
// state logger //
//////////////////

// https://github.com/flitbit/diff#differences
const colors = {
  title: 'gray',
  prevState: '#9E9E9E',
  action: '#03A9F4',
  newState: '#4CAF50',
  diff: {
    E: {
      color: '#2196F3',
      text: 'CHANGED:'
    },
    N: {
      color: '#4CAF50',
      text: 'ADDED:'
    },
    D: {
      color: '#F44336',
      text: 'DELETED:'
    },
    A: {
      color: '#2196F3',
      text: 'ARRAY:'
    }
  }
};

function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
  return (state: IAppState, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(`%caction %c${action.type}`, style(colors.title, 'lighter'), style());

    console.log('%cprev state', style(colors.prevState), state);
    console.log('%caction', style(colors.action), action);
    console.log('%cnext state', style(colors.newState), result);

    diffLogger(state, result);

    console.groupEnd();
    return result;
  };
}

function diffLogger(prevState: any, newState: any) {
  const diff = differ(prevState, newState);
  console.groupCollapsed('diff');

  if (diff) {
    diff.forEach((elem) => {
      const { kind } = elem;
      console.log(`%c${colors.diff[kind].text}`, style(colors.diff[kind].color), ...render(elem));
    });
  } else {
    console.log('—— no diff ——');
  }

  console.groupEnd();
}

function render(diff) {
  const { kind, path = [], lhs, rhs, index, item } = diff;

  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '→', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [`${path.join('.')}[${index}]`, item];
    default:
      return [];
  }
}

function style(color = 'inherit', weight = 'bold') {
  return `color: ${color}; font-weight: ${weight}`;
}
