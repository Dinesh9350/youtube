import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    // videoCardWidth: (state, action) => {
    //   state.isMenuOpen
    // }
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
