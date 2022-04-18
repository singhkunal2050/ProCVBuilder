import { configureStore } from '@reduxjs/toolkit'
import builderReducer from './builderSlice'

export default configureStore({
    reducer: builderReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})