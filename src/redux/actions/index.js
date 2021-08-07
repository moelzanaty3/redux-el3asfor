import { PLAY, PAUSE } from "../constants";

// action creator
export const incrementPlay = () => ({
  type: PLAY,
});

export const pausePlay = () => ({
  type: PAUSE,
});
