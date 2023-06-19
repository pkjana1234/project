import { configureStore } from "@reduxjs/toolkit";
import { BannerSlice } from "../Slices/HomeDataSlice";
import { AuthSlice } from "../Slices/AuthSlice";
import { ServiceSlice } from "../Slices/ServicebookingSlice";
import { ContactSlice } from "../Slices/ContactSlice";
import { AdminSlice } from "../Slices/AdminSlice";


const store = configureStore({
    reducer: {
        Banner: BannerSlice.reducer,
        Auth: AuthSlice.reducer,
        Service: ServiceSlice.reducer,
        Contact: ContactSlice.reducer,
        Admin : AdminSlice.reducer
    }
})
export default store