import { configureStore } from "@reduxjs/toolkit";

import commentReducer from "./commentSlice";
import modeReducer from "./modeSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    mode: modeReducer,
    category: categoryReducer,
  },
});

export default store;
