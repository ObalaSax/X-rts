import { configureStore } from "@reduxjs/toolkit";

export const Xstore = configureStore({
  reducer: {},
});

export type myXRootState = ReturnType<typeof Xstore.getState>;
export type myXDispatch = typeof Xstore.dispatch;
