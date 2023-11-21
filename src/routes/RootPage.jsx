import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootPage;
