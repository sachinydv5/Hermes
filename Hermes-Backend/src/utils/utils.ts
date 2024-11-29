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

export const isPasswordStrong = (password: string): boolean => {
  // Define a regular expression to check for a strong password
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Explanation:
  // - (?=.*[a-z]): at least one lowercase letter
  // - (?=.*[A-Z]): at least one uppercase letter
  // - (?=.*\d): at least one digit
  // - (?=.*[@$!%*?&]): at least one special character
  // - [A-Za-z\d@$!%*?&]{8,}: at least 8 characters long
  
  return strongPasswordRegex.test(password);
}
