import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEmail } from '../../types/storeTypes';

const initialState: IEmail = {
    popup: false,
    status: '',
};

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        setPopup(state, action: PayloadAction<boolean>) {
            state.popup = action.payload;
        },
        setEmailStatus(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
    },
});

export default emailSlice.reducer;
