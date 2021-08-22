import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';

export const DatePicker: React.FC<KeyboardDatePickerProps> = ({ ...rest }) => (
  // const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };

  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
    <KeyboardDatePicker
      {...rest}
      margin='normal'
      format='dd/MM/yyyy'
      inputVariant='outlined'
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  </MuiPickersUtilsProvider>
);
