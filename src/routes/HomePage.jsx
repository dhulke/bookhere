import React, { useState } from 'react';
import Hero from '../components/Hero';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PropertyCard from '../components/PropertyCard';
import PropertyDialog from '../components/PropertyDialog';
import { useSelector } from 'react-redux';
import { selectAllProperties } from '../slices/property.slice';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [propertyId, setPropertyId] = useState(null);
  const properties = useSelector(selectAllProperties);

  const openPropertyDialog = (id = null) => {
    setOpen(true);
    setPropertyId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Hero handleOpenPropertyDialog={openPropertyDialog} />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              handleOpenPropertyDialog={openPropertyDialog}
            />
          ))}
        </Grid>
      </Container>
      {open && (
        <PropertyDialog
          open={open}
          propertyId={propertyId}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
