import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthInstance from "../../ApiBuild/AuthInstance";
import { toast } from 'react-toastify';
export const ApiContact = createAsyncThunk('api/contacts', async (data) => {
    try {
        const res = await AuthInstance.post("contact", data)
        return res?.data
    } catch (error) {
        console.log(error);
    }
})
export const ContactSlice = createSlice({
    name: 'contact',
    initialState: {
        contactdata: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: {
        [ApiContact.pending]: (state, { payload }) => {
            state.loader = true
            console.log("ApiContact pending");
        },
        [ApiContact.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.servicedata = payload
            // alert(payload?.name)
            toast.success(`Hi ${payload?.name} we registered Your request. Thanks for contacting us`)
        },
        [ApiContact.rejected]: (state, { payload }) => {
            state.loader = false
            console.log("ApiContact rejected");
        }
    }
})