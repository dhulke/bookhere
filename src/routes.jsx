import { createHashRouter } from 'react-router-dom';
import RootPage from './routes/RootPage';
import HomePage from './routes/HomePage';
import ErrorPage from './routes/ErrorPage';
import PropertyPage from './routes/PropertyPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'property/:propertyId',
        element: <PropertyPage />,
      },
    ],
  },
]);
