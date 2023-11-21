import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectPropertyById } from '../slices/property.slice';
import SingleInputDateRangePicker from '../components/SingleInputDateRangePicker';
import BookingEntry from '../components/BookingEntry';
import {
  insertBooking,
  removeBooking,
  selectBookingsByPropertyId,
} from '../slices/booking.slice';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

const PropertyPage = () => {
  const { propertyId } = useParams();
  const property = useSelector((state) =>
    selectPropertyById(state, propertyId),
  );
  const bookings = useSelector((state) =>
    selectBookingsByPropertyId(state, propertyId),
  );
  const dispatch = useDispatch();
  const [bookingError, setBookingError] = useState(null);

  function handleOnDateRangeSelected(startDate, endDate) {
    for (const {
      startDate: bookingStartDate,
      endDate: bookingEndDate,
    } of bookings) {
      const bookingStartDateDayjs = dayjs(bookingStartDate);
      const bookingEndDateDayjs = dayjs(bookingEndDate);
      if (
        bookingStartDateDayjs.isBetween(
          dayjs(startDate),
          dayjs(endDate),
          null,
          '[]',
        ) ||
        bookingEndDateDayjs.isBetween(
          dayjs(startDate),
          dayjs(endDate),
          null,
          '[]',
        )
      ) {
        setBookingError(
          `The range selected overlaps with the range ${bookingStartDateDayjs.format(
            'MM/DD/YYYY',
          )} - ${bookingEndDateDayjs.format(
            'MM/DD/YYYY',
          )}. Please choose a non-overlapping range.`,
        );
        return;
      }
    }
    setBookingError(null);
    dispatch(
      insertBooking({
        id: uuidv4(),
        propertyId,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      }),
    );
  }

  function handleOnRemoveBooking(id) {
    dispatch(removeBooking(id));
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '@media (min-width:600px)': {
            flexDirection: 'row',
          },
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pl: '50.25%',
            pt: '50.25%',
          }}
          image={property.imageUrl}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            <Link
              color="inherit"
              href={`#/property/${property.id}`}
              underline="hover"
            >
              {property.title}
            </Link>
          </Typography>
          <Typography gutterBottom>{property.description}</Typography>
          <Typography fontWeight="bold">{property.location}</Typography>
          <Divider sx={{ mt: 3, mb: 3 }} />
          <Typography fontWeight="bold">Book a date:</Typography>
          <SingleInputDateRangePicker
            onDateRangeSelected={handleOnDateRangeSelected}
            disableRanges={bookings}
          />
          {bookingError && <Typography color="red">{bookingError}</Typography>}
          <Divider sx={{ mt: 3, mb: 3 }} />
          <Typography fontWeight="bold">
            {bookings.length ? 'Your bookings:' : 'You have no bookings'}
          </Typography>
          <Stack>
            {bookings.map((booking) => (
              <BookingEntry
                key={booking.id}
                id={booking.id}
                startDate={booking.startDate}
                endDate={booking.endDate}
                onRemove={handleOnRemoveBooking}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PropertyPage;
