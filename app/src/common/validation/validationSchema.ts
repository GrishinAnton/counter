import { string, number } from 'yup';
import { validationMessage } from './validationMessage';

export const validationString = string()
  .trim()
  .max(255, validationMessage.maxLength())
  .required(validationMessage.required);

export const validationNumber = number()
  .integer(validationMessage.numberValidation)
  .required(validationMessage.required);

export const emailValidation = string()
  .trim()
  .max(255, validationMessage.maxLength())
  .email(validationMessage.email)
  .required(validationMessage.required);
