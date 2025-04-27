// rootReducer.ts
import { combineSlices } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import { cartSlice } from "./cart";



const combinedReducer = combineSlices(
  userSlice,
  cartSlice,
);


const rootReducer = (state: Parameters<typeof combinedReducer>[0], action: Parameters<typeof combinedReducer>[1]) => {
  if (action.type === 'RESET') {
    state = undefined; // This clears the state on logout
  }
  return combinedReducer(state, action);
};

export { rootReducer };


export type RootState = ReturnType<typeof combinedReducer>;
