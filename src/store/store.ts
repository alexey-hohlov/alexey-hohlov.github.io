import { combineReducers, configureStore } from '@reduxjs/toolkit';
import emailReducer from './reducers/emailReducer';

const rootReducer = combineReducers({
    emailReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
