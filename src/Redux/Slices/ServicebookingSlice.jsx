import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthInstance from "../../ApiBuild/AuthInstance";
import { toast } from 'react-toastify';
export const ApiServiceBooks = createAsyncThunk('api/servicebooking', async (data) => {
    try {
        const res = await AuthInstance.post("servicebook", data)
        return res?.data
    } catch (error) {
        console.log(error);
    }
})
export const ServiceSlice = createSlice({
    name: 'service',
    initialState: {
        servicedata: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: {
        [ApiServiceBooks.pending]: (state, { payload }) => {
            state.loader = true
            console.log("ApiServiceBooks pending");
        },
        [ApiServiceBooks.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.servicedata = payload
            // alert(payload?.name)
            toast.success(`Hi ${payload?.name} we registered Your request. Our Team Will Contact You Soon...`)
        },
        [ApiServiceBooks.rejected]: (state, { payload }) => {
            state.loader = false
            console.log("ApiServiceBooks rejected");
        }
    }
})