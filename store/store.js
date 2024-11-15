import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from './layout-slice'


export default configureStore({
    reducer: {
        layout: layoutSlice
    },
    devTools:true
})