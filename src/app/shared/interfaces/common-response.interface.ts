export type TStatusType = 'OK' | 'ERROR';
export type TContent = any | any[];

interface ICommonResponseStatus {
  status: TStatusType;
}

export interface ICommonPayload {
  content: TContent;
}

export interface ICommonResponseBody {
  payload?: ICommonPayload | TContent;
  errorCode?: string;
  message?: any;
  statusCode?: number;
}

export interface ICommonResponse extends ICommonResponseStatus, ICommonResponseBody {}
