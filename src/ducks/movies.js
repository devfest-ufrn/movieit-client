// Actions
export const types = {
  SET: 'movies/SET'
};

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case types.SET:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function set(payload) {
  return { type: types.SET, payload };
}

export const actions = {
  set
};
