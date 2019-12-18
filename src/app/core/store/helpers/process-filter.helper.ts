import { IFilterPayload } from '@core/store/actions/show.actions';
import { IShow } from '@sharedInterfaces/show.interface';

export function processFilter(filterParams: IFilterPayload, shows: IShow[]) {
  return shows.filter((show: IShow) => show[filterParams.fieldName] === filterParams.filterQuery);
}
