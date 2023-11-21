import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { removeProperty } from '../slices/property.slice';

const PropertyCard = ({ property, handleOpenPropertyDialog }) => {
  const dispatch = useDispatch();

  return (
    <Grid item key={property.id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
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
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => handleOpenPropertyDialog(property.id)}
          >
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => dispatch(removeProperty(property.id))}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PropertyCard;
