export const validationMessage = {
  required: 'Это обязательное поле',
  numberValidation: 'Введите число',
  email: 'Укажите правильный e-mail',
  maxLength: (count = 255) => `Максимальное кол-во знаков ${count}`,
  minDate: 'Дата не может быть меньше текущей',
  typeError: 'Неверный формат даты',
};
