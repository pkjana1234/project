import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../ApiBuild/ApiInstance";

export const BannerApi = createAsyncThunk('Api/banner', async () => {
    const res = await axiosInstance.get('banner')
    return res?.data
})
export const BasicServiceApi = createAsyncThunk('Api/basicservice', async () => {
    const res = await axiosInstance.get('basicservice')
    return res?.data
})
export const MainServiceApi = createAsyncThunk('Api/mainservice', async () => {
    const res = await axiosInstance.get('mainservice')
    return res?.data
})
export const TestimonialApi = createAsyncThunk('Api/testimonial', async () => {
    const res = await axiosInstance.get('testimonial')
    return res?.data
})
export const MembersApi = createAsyncThunk('Api/members', async () => {
    const res = await axiosInstance.get('members')
    return res?.data
})
export const BannerSlice = createSlice({
    name: "Data",
    initialState: {
        bannerdata: [],
        basicservice: [],
        mainservice: [],
        testData: [],
        memberData : []
    },
    reducers: {

    },
    extraReducers: {

        //banner
        [BannerApi.fulfilled]: (state, { payload }) => {
            state.bannerdata = payload
            console.log("BannerApi Fetched");
        },
        [BannerApi.rejected]: (state, { payload }) => {
            console.log("BannerApi Fetched Error");
        },

        //BasicServiceApi
        [BasicServiceApi.fulfilled]: (state, { payload }) => {
            state.basicservice = payload
            console.log("Basicservice Fetched");
        },
        [BasicServiceApi.rejected]: (state, { payload }) => {
            console.log("Basicservice Fetched Error");
        },

        //MainServiceApi
        [MainServiceApi.fulfilled]: (state, { payload }) => {
            state.mainservice = payload
            console.log("MainService Fetched");
        },
        [MainServiceApi.rejected]: (state, { payload }) => {
            console.log("MainService Fetched Error");
        },

        //TestimonialApi
        [TestimonialApi.fulfilled]: (state, { payload }) => {
            state.testData = payload
            console.log("TestimonialApi Fetched");
        },
        [TestimonialApi.rejected]: (state, { payload }) => {
            console.log("TestimonialApi Fetched Error");
        },

        //MembersApi
        [MembersApi.fulfilled]: (state, { payload }) => {
            state.memberData = payload
            console.log("MembersApi Fetched");
        },
        [MembersApi.rejected]: (state, { payload }) => {
            console.log("MembersApi Fetched Error");
        }
    }
})