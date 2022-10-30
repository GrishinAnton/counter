import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '../TextField/TextField';
import { useState } from 'react';

export const DatePicker = ({ ...rest }) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils} locale={ruLocale}>
      <DesktopDatePicker
        {...rest}
        // margin='normal'
        inputFormat='dd/MM/yyyy'
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
