import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
 const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // middleware:{
  //   getDefaultMiddleware({
  //     serializableCheck:false
  //   })
  // }
});
export default store 