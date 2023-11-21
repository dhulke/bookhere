import React, { useState } from 'react';
import Calendar from '@mui/icons-material/Event';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

dayjs.extend(isBetween);

export default function SingleInputDateRangePicker({
  onDateRangeSelected,
  disableRanges,
}) {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  function handleOnAccept([startDate, endDate]) {
    if (startDate && endDate) {
      onDateRangeSelected(startDate, endDate);
      setSelectedDateRange([null, null]);
    }
  }

  function handleShouldDisable(date) {
    for (const { startDate, endDate } of disableRanges) {
      if (date.isBetween(dayjs(startDate), dayjs(endDate), null, '[]')) {
        return true;
      }
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          onAccept={handleOnAccept}
          minDate={dayjs()}
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{
            textField: {
              size: 'small',
              InputProps: { endAdornment: <Calendar /> },
            },
          }}
          value={selectedDateRange}
          onChange={(newValue) => {
            setSelectedDateRange(newValue);
          }}
          shouldDisableDate={handleShouldDisable}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
