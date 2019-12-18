import {IShow} from '@sharedInterfaces/show.interface';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ISortPayload} from '@core/store/actions/show.actions';



export function processSorting(sortParams: ISortPayload, showsPayload: Observable<IShow[]>) {

  return showsPayload.pipe(
    map(shows => {
      switch (sortParams.sortDirection) {
        case 'ASC':
          return shows.sort((a: IShow, b: IShow) => {
            if (b[sortParams.fieldName] instanceof Date) return b[sortParams.fieldName].getDate() - a[sortParams.fieldName].getDate();
            return b[sortParams.fieldName].localeCompare(a[sortParams.fieldName]);
          });
        case 'DESC':
          return shows.sort((a: IShow, b: IShow) => {
            if (a[sortParams.fieldName] instanceof Date) return a[sortParams.fieldName].getDate() - b[sortParams.fieldName].getDate();
            return a[sortParams.fieldName].localeCompare(b[sortParams.fieldName]);
          });
      }

      return shows.sort((a: IShow, b: IShow) => a.id - b.id);
    })
  );
}
