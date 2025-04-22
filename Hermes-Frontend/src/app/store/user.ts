import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface UserSliceState {
  isLoggedIn: boolean
  firstName: string
}

const initialState: UserSliceState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  firstName: localStorage.getItem("firstName")??"User",
}

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: create => ({
    updateUserLoggedIn: create.reducer(
      (state, action: PayloadAction<{firstName: string}>) => {
        console.log("isUserLoggedIn called")
        console.log(action)
        state.isLoggedIn = true;
        state.firstName = action.payload.firstName
      },
    ),
  }),
  selectors: {
    userData: state => state.firstName,
    isUserLoggedIn: state => state.isLoggedIn
  },
})

export const { updateUserLoggedIn } = userSlice.actions

export const { userData, isUserLoggedIn }= userSlice.selectors

