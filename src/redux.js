import { createStore } from "redux";

const initialState = {
  count: 0,
};

// actions
const PLAY = "PLAY";
const PAUSE = "PAUSE";

// action creator
export const incrementPlay = () => ({
  type: PLAY,
});

export const pausePlay = () => ({
  type: PAUSE,
});

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

// store
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
