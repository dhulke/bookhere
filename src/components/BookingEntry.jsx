import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

const BookingEntry = ({ id, startDate, endDate, onRemove }) => {
  return (
    <Stack
      sx={{ pt: 1 }}
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Typography>
        {dayjs(startDate).format('MM/DD/YYYY')} -{' '}
        {dayjs(endDate).format('MM/DD/YYYY')}
      </Typography>
      <IconButton
        aria-label="delete"
        sx={{ height: '48px', width: '48px' }}
        onClick={() => onRemove(id)}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default BookingEntry;
