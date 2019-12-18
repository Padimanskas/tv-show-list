import { ICommonResponse, ICommonPayload } from '@shared/interfaces/common-response.interface';

export type TNetwork = 'AMC' | 'Netflix' | 'MeGoGo' | 'IVI';
export type TGenre = 'Action' | 'Animation' | 'Comedy' | 'Crime' | 'Drama' | 'Experimental' |
  'Fantasy' | 'Historical' | 'Horror' | 'Romance' | 'Science Fiction' | 'Thriller' | 'Western';

export interface IShowResponse extends ICommonResponse {
  payload: IShowPayload;
}

export interface IShowPayload extends ICommonPayload {
  content: IShow[];
}

export interface IFilterFieldParams {
  fieldName: string;
  fieldValue: string;
}

export interface IShow {
  id: number;
  name: string;
  network: string;
  premiereDate: Date;
  genre: string;
  season: number;
}
