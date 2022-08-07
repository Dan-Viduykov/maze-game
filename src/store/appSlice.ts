import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  rows: number;
  columns: number;
}

const initialState: AppState = {
  rows: 3,
  columns: 3
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSizeGameField: (state, action: PayloadAction<number[]>) => {
        state.rows = action.payload[0];
        state.columns = action.payload[1];
    }
  },
})

export const { changeSizeGameField } = appSlice.actions;
export default appSlice.reducer;