import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface UserSliceState {
  isLoggedIn: boolean
  firstName: string
}

const initialState: UserSliceState = {
  isLoggedIn: false,
  firstName: "",
}

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: create => ({
    updateUserLoggedIn: create.reducer(
      (state, action: PayloadAction<{firstName: string}>) => {
        console.log("isUserLoggedIn called")
        state.isLoggedIn = true;
        state.firstName = action.payload.firstName
      },
    ),
  }),
  selectors: {
    userData: state => state,
    isUserLoggedIn: state => state.isLoggedIn
  },
})

export const { updateUserLoggedIn } = userSlice.actions

export const { userData, isUserLoggedIn }= userSlice.selectors

