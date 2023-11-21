import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const propertyAdapter = createEntityAdapter();

const propertySlice = createSlice({
  name: 'property',
  initialState: propertyAdapter.getInitialState(),
  reducers: {
    setProperties: propertyAdapter.setAll,
    upsertProperty: propertyAdapter.upsertOne,
    removeProperty: propertyAdapter.removeOne,
  },
});

export const { setProperties, upsertProperty, removeProperty } =
  propertySlice.actions;
export default propertySlice.reducer;

export const {
  selectAll: selectAllProperties,
  selectById: selectPropertyById,
} = propertyAdapter.getSelectors((state) => state.properties);
