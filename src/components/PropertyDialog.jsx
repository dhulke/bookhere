import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectPropertyById, upsertProperty } from '../slices/property.slice';
import { v4 as uuidv4 } from 'uuid';

const PropertyDialog = ({ open, handleClose, propertyId }) => {
  const dispatch = useDispatch();
  const property = useSelector((state) =>
    selectPropertyById(state, propertyId),
  );

  const formik = useFormik({
    initialValues: {
      id: property ? property.id : uuidv4(),
      title: property ? property.title : null,
      description: property ? property.description : null,
      location: property ? property.location : null,
      imageUrl: property ? property.imageUrl : null,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .max(55, 'Must be 55 characters or less')
        .required('Required'),
      description: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
      location: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
      imageUrl: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .max(1024, 'Must be 1024 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(upsertProperty(values));
      handleClose();
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>{propertyId ? 'Edit' : 'Create'} Property</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('title')}
            error={formik.touched.title && !!formik.errors.title}
            helperText={
              formik.touched.title && !!formik.errors.title
                ? firstError(formik.errors.title)
                : null
            }
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            multiline
            minRows={2}
            maxRows={3}
            {...formik.getFieldProps('description')}
            error={formik.touched.description && !!formik.errors.description}
            helperText={
              formik.touched.description && !!formik.errors.description
                ? firstError(formik.errors.description)
                : null
            }
          />
          <TextField
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('location')}
            error={formik.touched.location && !!formik.errors.location}
            helperText={
              formik.touched.location && !!formik.errors.location
                ? firstError(formik.errors.location)
                : null
            }
          />
          <TextField
            margin="dense"
            id="imageUrl"
            label="Image URL"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('imageUrl')}
            error={formik.touched.imageUrl && !!formik.errors.imageUrl}
            helperText={
              formik.touched.imageUrl && !!formik.errors.imageUrl
                ? firstError(formik.errors.imageUrl)
                : null
            }
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => formik.submitForm()}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

function firstError(error) {
  return Array.isArray(error) ? error[0] : error;
}

export default PropertyDialog;
