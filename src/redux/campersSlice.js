import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from '../api/api';

export const getCampers = createAsyncThunk('campers/getAll', async () => {
  return await fetchCampers();
});

export const getCamperDetails = createAsyncThunk(
  'campers/getById',
  async id => await fetchCamperById(id)
);

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,

  detailsById: {},
  detailsLoading: false,
  detailsError: null,

  // “Load More” на фронті
  visibleCount: 4,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetSearchResults(state) {
      state.items = [];
      state.total = 0;
      state.error = null;
      state.visibleCount = 4;
    },
    increaseVisibleCount(state) {
      state.visibleCount += 4;
    },
    resetVisibleCount(state) {
      state.visibleCount = 4;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message ?? 'Failed to load campers';
      })

      .addCase(getCamperDetails.pending, state => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.detailsById[action.payload.id] = action.payload;
      })
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error?.message ?? 'Failed to load camper';
      });
  },
});

export const { resetSearchResults, increaseVisibleCount, resetVisibleCount } =
  campersSlice.actions;

export const selectCampersItems = state => state.campers.items;
export const selectCampersTotal = state => state.campers.total;
export const selectCampersIsLoading = state => state.campers.isLoading;
export const selectCampersError = state => state.campers.error;
export const selectVisibleCount = state => state.campers.visibleCount;
export const selectCamperDetailsById = state => state.campers.detailsById;
export const selectCamperDetails = (state, id) =>
  state.campers.detailsById ? state.campers.detailsById[id] : undefined;

export default campersSlice.reducer;
