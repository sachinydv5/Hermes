import {
  NextFunction,
  Request,
  RequestHandler,
  Response
} from 'express';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phoneRegex = /\d{10}/;

export const emailValidation = (email: string): boolean => emailRegex.test(email);

export const phoneValidation = (phoneNumber: string): boolean => phoneRegex.test(phoneNumber);


