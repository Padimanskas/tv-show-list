export type TStatusType = 'OK' | 'ERROR';
export type TContent = any | any[];

interface ICommonResponseStatus {
  status: TStatusType;
}

export interface ICommonPayload {
  content: TContent;
  filter: object;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  sort: string[][];
  totalElements: number;
  totalPages: number;
}

export interface ICommonResponseBody {
  payload?: ICommonPayload | TContent;
  errorCode?: string;
  message?: any;
  statusCode?: number;
}

export interface ICommonResponse extends ICommonResponseStatus, ICommonResponseBody {}
