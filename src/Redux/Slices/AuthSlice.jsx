import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthInstance from '../../ApiBuild/AuthInstance'
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RegisterApi = createAsyncThunk('api/register', async (data) => {
    try {
        const res = await AuthInstance.post("users", data)
        return res?.data
    } catch (error) {
        console.log(error);
    }
})
export const UsersApi = createAsyncThunk('api/users', async () => {
    const res = await AuthInstance.get('users')
    return (res?.data)
})
export const AdminApi = createAsyncThunk('api/admin', async () => {
    const res = await AuthInstance.get('admin')
    return (res?.data)
})
// export const ServiceApi = createAsyncThunk('api/admin', async (data) => {
//     const res = await AuthInstance.post('admin')
//     return (res?.data)
// })
export const AuthSlice = createSlice({
    name: "AuthApis",
    initialState: {
        data: [],
        adminData: [],
        loading: false,
        loginToggle: ''
    },
    reducers: {
        admin_check: (state, { payload }) => {
            const token = localStorage.getItem("admin_token")
            const name = localStorage.getItem("admin_email")
            if (name === '' || name === null || name === undefined && token === '' || token === null || token === undefined) {
                state.loginToggle = '/adminlogin'
            } else {
                state.loginToggle = "/admin"
            }
        },
        redirectTo: (state, { payload }) => {
            state.loginToggle = ''
        },
        logout: (state, { payload }) => {
            localStorage.removeItem('name')
            localStorage.removeItem('token')
            toast.success("Logout Successfully")
        },
        Admin_logout: (state, { payload }) => {
            localStorage.removeItem('admin_token')
            localStorage.removeItem('admin_name')
            toast.success("Admin Logout Successfully")
        }
    },
    extraReducers: {
        [RegisterApi.pending]: (state, { payload }) => {
            state.loading = true
        },
        [RegisterApi.fulfilled]: (state, { payload }) => {
            state.loading = false
            // state.data = payload
            toast.success(`Hi ${payload?.fname}. you registered successfully`)
            state.loginToggle = "/login"
            console.log("RegisterApi fulfilled");
        },
        [RegisterApi.rejected]: (state, { payload }) => {
            state.loading = false
            console.log("RegisterApi failed on load");
        },
        //usersapi fetch
        [UsersApi.pending]: (state, { payload }) => {
            state.loading = true
        },
        [UsersApi.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
        },
        [UsersApi.rejected]: (state, { payload }) => {
            state.loading = false
        },
        //Admin fetch
        [AdminApi.pending]: (state, { payload }) => {
            state.loading = true
        },
        [AdminApi.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.adminData = payload
        },
        [AdminApi.rejected]: (state, { payload }) => {
            state.loading = false
        },
        //Service fetch
        // [ServiceApi.pending]: (state, {payload}) => {
        //     state.loading = true
        // },
        // [ServiceApi.fulfilled]: (state, {payload}) => {
        //     state.loading = false
        //     state.data = payload
        // },
        // [ServiceApi.rejected]: (state, {payload}) => {
        //     state.loading = true
        // }
    }
})
export const { redirectTo, logout, Admin_logout } = AuthSlice.actions