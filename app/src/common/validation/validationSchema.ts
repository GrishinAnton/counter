import { formatISO, startOfDay } from 'date-fns';
import { string, number, ref, date } from 'yup';
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

export const passwordValidation = string()
  .trim()
  .min(8, 'Пароль должен содержать минимум 8 символов')
  .max(20, 'Пароль должен содержать максимум 20 символов')
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/gm,
    'Пароль должен содержать заглавные и строчные буквы и хотя бы одну цифру',
  )
  .required(validationMessage.required);

export const passwordValidationConfirm = string().oneOf([ref('password'), null], 'Пароли должны совпадать');

export const dateStartValidation = date()
  .typeError(validationMessage.typeError)
  .required(validationMessage.required)
  .min(formatISO(startOfDay(new Date())), validationMessage.minDate);
