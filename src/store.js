import { configureStore } from '@reduxjs/toolkit';
import propertyReducer, { setProperties } from './slices/property.slice';
import bookingReducer from './slices/booking.slice';
import { v4 as uuidv4 } from 'uuid';

export const propertiesInitialValue = [
  {
    id: uuidv4(),
    title: 'Charming Bungalow',
    description:
      'A delightful and cozy bungalow located in a peaceful neighborhood, perfect for a relaxing stay.',
    location: 'New York, New York',
    imageUrl:
      'https://media.istockphoto.com/id/1443892103/photo/subsidi-house-from-government-real-estate-and-property-investment-residential-building-concept.jpg?s=2048x2048&w=is&k=20&c=ianTqLOj5G98n_CjhERxC0Ulv-TniC_o8Cn0QzB0X5M=',
  },
  {
    id: uuidv4(),
    title: 'Seaside Escape',
    description:
      'Enjoy the ocean breeze in this beautiful seaside house, ideal for beach lovers.',
    location: 'Malibu, California',
    imageUrl:
      'https://media.istockphoto.com/id/1459311150/photo/new-home-and-modern-residential-with-house-development-construction-real-estate-and-property.jpg?s=1024x1024&w=is&k=20&c=CekZiSHvpUq77FsSISPpLTVgsTldoI81-_k5dOfzERY=',
  },
  {
    id: uuidv4(),
    title: 'Mountain Cabin',
    description:
      'A rustic cabin in the mountains, surrounded by nature and perfect for outdoor enthusiasts.',
    location: 'Aspen, Colorado',
    imageUrl:
      'https://media.istockphoto.com/id/1275836582/photo/beautiful-country-house-close-up.jpg?s=1024x1024&w=is&k=20&c=GteFpSXL-9Sz4fVrUIucL2maS73-JdLOcVUnHHJitkw=',
  },
  {
    id: uuidv4(),
    title: 'Urban Loft',
    description:
      'A modern and stylish loft situated in the heart of the city, close to all the action.',
    location: 'Chicago, Illinois',
    imageUrl:
      'https://media.istockphoto.com/id/1478671184/photo/american-houses.jpg?s=1024x1024&w=is&k=20&c=KXbAlXxs-cnhgmrUsLliFqp8kRsj0NB7dDMRczEbsuo=',
  },
  {
    id: uuidv4(),
    title: 'Country Manor',
    description:
      'A grand and luxurious manor in the countryside, offering tranquility and elegance.',
    location: 'Charleston, South Carolina',
    imageUrl:
      'https://media.istockphoto.com/id/836387610/photo/building-photorealistic-render-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=OMwd9fC6cLUElSBv8pl67C7zhGYzKbvZQnSQ8ODiSnA=',
  },
  {
    id: uuidv4(),
    title: 'Lakeside Retreat',
    description:
      'A serene lakeside property, perfect for a peaceful getaway and water activities.',
    location: 'Lake Tahoe, Nevada',
    imageUrl:
      'https://media.istockphoto.com/id/884674570/photo/house-exteriors.jpg?s=1024x1024&w=is&k=20&c=7EaYDbRr_nSC5NScOAQL0u7QbSf1VJ78NLLze5_PFkM=',
  },
  {
    id: uuidv4(),
    title: 'Desert Oasis',
    description:
      'A unique and secluded home in the desert, offering stunning landscapes and privacy.',
    location: 'Santa Fe, New Mexico',
    imageUrl:
      'https://media.istockphoto.com/id/1443892103/photo/subsidi-house-from-government-real-estate-and-property-investment-residential-building-concept.jpg?s=2048x2048&w=is&k=20&c=ianTqLOj5G98n_CjhERxC0Ulv-TniC_o8Cn0QzB0X5M=',
  },
  {
    id: uuidv4(),
    title: 'Tropical Villa',
    description:
      'A luxurious villa in a tropical paradise, ideal for an exotic and relaxing vacation.',
    location: 'Key West, Florida',
    imageUrl:
      'https://media.istockphoto.com/id/1329424130/photo/modern-house-exterior-for-sale-or-rent.jpg?s=1024x1024&w=is&k=20&c=aylZlzeSvFFDxGaPJ_LXH2R7FVBvvkpShbcwXG7Hh38=',
  },
  {
    id: uuidv4(),
    title: 'Historic Townhouse',
    description:
      'A charming townhouse full of history, located in a quaint and historic neighborhood.',
    location: 'Savannah, Georgia',
    imageUrl:
      'https://media.istockphoto.com/id/1166468213/photo/cobbled-streets-and-colorfully-painted-old-wooden-houses-in-porvoo-in-finland-in-a-summer.jpg?s=1024x1024&w=is&k=20&c=_fPnLgk-MfrOwWTCtX7AgJe-6kHcTnnoUOwtEkK91Gw=',
  },
  {
    id: uuidv4(),
    title: 'Modern Condo',
    description:
      'A sleek and contemporary condo with all the modern amenities, in a vibrant urban area.',
    location: 'Seattle, Washington',
    imageUrl:
      'https://media.istockphoto.com/id/838466034/photo/building-photo-realistic-render-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=1dxXUd8FhjT7MTEGZ9p_QzZ5C5SOGIRa1CMy0x50oRQ=',
  },
];

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    bookings: bookingReducer,
  },
});

store.dispatch(setProperties(propertiesInitialValue));
