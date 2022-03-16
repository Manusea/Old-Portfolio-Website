import {configureStore} from "@reduxjs/toolkit"
import educationReducer from "./educations/educationSlice"
import contactReducer from "./contracts/contactSlice"

export const store = configureStore({
    reducer: {
        educations: educationReducer,
        contacts: contactReducer,
    },
})