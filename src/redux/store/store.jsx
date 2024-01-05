import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../../components/feature/counter/counterSlice'
import logger from '../middleware/Logger'

const store=configureStore({
    reducer:{
        counter:counterReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
})

export default store;