import { configureStore } from "@reduxjs/toolkit";

import commentReducer from "./commentSlice";
import modeReducer from "./modeSlice";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    mode: modeReducer,
  },
});

export default store;
