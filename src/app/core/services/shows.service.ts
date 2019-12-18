import {Injectable} from '@angular/core';
import {IShowResponse} from '@shared/interfaces/show.interface';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  private showsResponse: IShowResponse = {
    payload: {
      content: [
        {
          id: 0,
          name: 'The Terror',
          network: 'AMC',
          genre: 'harror',
          season: 3,
          premiereDate: new Date('10/18/1986')
        },
        {
          id: 1,
          name: 'Preacher',
          network: 'Netflix',
          genre: 'drama',
          season: 4,
          premiereDate: new Date('10/29/1986')
        },
        {
          id: 2,
          name: 'Better Call Saul',
          network: 'Netflix',
          genre: 'crime',
          season: 2,
          premiereDate: new Date('02/03/1986')
        },
        {
          id: 3,
          name: 'Preacher',
          network: 'AMC',
          genre: 'dark comedy',
          season: 1,
          premiereDate: new Date('09/03/2019')
        },
        {
          id: 4,
          name: 'Better Call Saul',
          network: 'Netflix',
          genre: 'crime',
          season: 5,
          premiereDate: new Date('11/10/2015')
        },
        {
          id: 5,
          name: 'The Terror',
          network: 'AMC',
          genre: 'tragedy',
          season: 3,
          premiereDate: new Date('05/07/2006')
        },
        {
          id: 6,
          name: 'Better Call Saul',
          network: 'AMC',
          genre: 'drama',
          season: 1,
          premiereDate: new Date('01/10/1986')
        },
        {
          id: 7,
          name: 'The Terror',
          network: 'Netflix',
          genre: 'crime',
          season: 1,
          premiereDate: new Date('01/07/2011')
        },
        {
          id: 7,
          name: 'The Terror Terror Terror',
          network: 'Netflix',
          genre: 'drama',
          season: 5,
          premiereDate: new Date('01/07/2011')
        },
      ],
      filter: {},
      first: true,
      last: false,
      number: 0,
      size: 5,
      sort: [],
      totalElements: 0,
      totalPages: 0
    },
    errorCode: '',
    message: '',
    statusCode: 200,
    status: 'OK'
  };

  public getShows(): Observable<IShowResponse> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.showsResponse);
        // observer.error(new Error('500'));
        observer.complete();
      }, 1000);
    });
  }

}
