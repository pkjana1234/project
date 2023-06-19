import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthInstance from '../../ApiBuild/AuthInstance'
export const getApiService = createAsyncThunk('api/adminservice', async () => {
    const res = await AuthInstance.get('servicebook')
    return res?.data
})
export const getApiContact = createAsyncThunk('api/admincontact', async () => {
    const res = await AuthInstance.get('contact')
    return res?.data
})
export const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        serviceData: [],
        contactData: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: {
        [getApiService.pending]: (state, { payload }) => {
            console.log("pending");
        },
        [getApiService.fulfilled]: (state, { payload }) => {
            state.serviceData = payload
        },
        [getApiService.rejected]: (state, { payload }) => {
            console.log("rejected");
        },
        [getApiContact.pending]: (state, { payload }) => {
            console.log("pending");
        },
        [getApiContact.fulfilled]: (state, { payload }) => {
            state.contactData = payload
        },
        [getApiContact.rejected]: (state, { payload }) => {
            console.log("rejected");
        },
    }
})