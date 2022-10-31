import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker as UIDatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '../TextField/TextField';
import { TextFieldProps } from '@mui/material';

export const DatePicker = (props: Omit<DatePickerProps<Date, Date | null>, 'renderInput'> & TextFieldProps) => {
  const { fullWidth, id, required, error, helperText, ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils} adapterLocale={ruLocale}>
      <UIDatePicker
        {...rest}
        inputFormat='dd/MM/yyyy'
        renderInput={params => (
          <TextField
            {...params}
            fullWidth={fullWidth}
            id={id}
            required={required}
            error={error}
            helperText={helperText}
          />
        )}
      />
    </LocalizationProvider>
  );
};
