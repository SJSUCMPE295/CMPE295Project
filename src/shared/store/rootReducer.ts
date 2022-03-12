import  {resetState}  from "./constants/action-types";
import appReducer from "./appReducer";

const rootReducer = (state, action) => {
  if (action.type === resetState) {
    // storage.removeItem("persist:root");

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
