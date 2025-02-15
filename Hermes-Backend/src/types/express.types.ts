
import { Request, Response} from 'express';
import { Query, Send } from 'express-serve-static-core';

export interface TypedRequest<T> extends Request {
  body: T
}

export interface TypedResponse<ResBody> extends Response {
  json: Send<ResBody, this>;
}


export interface PResponse<T> {
  error?: Error,
  value: T
}



export interface TypedRequestEmail<T> extends Request {
  body: T;
  query: Query;
  email?: string
}




