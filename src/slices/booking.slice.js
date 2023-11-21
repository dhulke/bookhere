import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';

const bookingAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.startDate.localeCompare(b.startDate),
});

const bookingSlice = createSlice({
  name: 'booking',
  initialState: bookingAdapter.getInitialState(),
  reducers: {
    insertBooking: bookingAdapter.addOne,
    removeBooking: bookingAdapter.removeOne,
  },
});

export const { insertBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

export const { selectAll: selectAllBookings } = bookingAdapter.getSelectors(
  (state) => state.bookings,
);

export const selectBookingsByPropertyId = createSelector(
  [selectAllBookings, (state, propertyId) => propertyId],
  (bookings, propertyId) =>
    bookings.filter((booking) => booking.propertyId === propertyId),
);
