import { PLAY, PAUSE } from "../constants";

const initialState = {
  count: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return { count: state.count + 1 };
    case PAUSE:
      return { count: 0 };
    default:
      return state;
  }
};

export default reducer;
