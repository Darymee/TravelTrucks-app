import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from '../api/api';

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkAPI) => {
    try {
      // API повертає { total, items } :contentReference[oaicite:0]{index=0}
      return await fetchCampers();
    } catch (e) {
      return thunkAPI.rejectWithValue(e?.message ?? 'Failed to load campers');
    }
  }
);

export const getCamperDetails = createAsyncThunk(
  'campers/getById',
  async (id, thunkAPI) => {
    try {
      return await fetchCamperById(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e?.message ?? 'Failed to load camper');
    }
  }
);

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,

  detailsById: {},
  detailsLoading: false,
  detailsError: null,

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
      // LIST
      .addCase(getCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items ?? [];
        state.total = action.payload.total ?? state.items.length;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload ?? action.error?.message ?? 'Failed to load campers';
      })

      // DETAILS
      .addCase(getCamperDetails.pending, state => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.detailsLoading = false;

        // захист на випадок, якщо payload не має id
        const camper = action.payload;
        if (camper?.id != null) {
          state.detailsById[camper.id] = camper;
        }
      })
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError =
          action.payload ?? action.error?.message ?? 'Failed to load camper';
      });
  },
});

export const { resetSearchResults, increaseVisibleCount, resetVisibleCount } =
  campersSlice.actions;

// selectors
export const selectCampersItems = state => state.campers.items;
export const selectCampersTotal = state => state.campers.total;
export const selectCampersIsLoading = state => state.campers.isLoading;
export const selectCampersError = state => state.campers.error;

export const selectVisibleCount = state => state.campers.visibleCount;

export const selectCamperDetailsMap = state => state.campers.detailsById;
export const selectCamperDetailsLoading = state => state.campers.detailsLoading;
export const selectCamperDetailsError = state => state.campers.detailsError;

export const selectCamperDetails = (state, id) => state.campers.detailsById[id];

export default campersSlice.reducer;
