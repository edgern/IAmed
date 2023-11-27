import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import medSlice from './slices/medSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    med: medSlice
  },
});