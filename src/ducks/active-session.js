// Actions
export const types = {
  LOAD: 'active-session/LOAD',
  SET: 'active-session/SET'
};

// Reducer
export default function reducer(state = null, action) {
  switch (action.type) {
    case types.SET:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function load(payload) {
  return { type: types.LOAD, payload };
}

export function set(payload) {
  return { type: types.SET, payload };
}

export const actions = {
  load,
  set
};
