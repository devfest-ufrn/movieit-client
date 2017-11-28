// Actions
export const types = {
  LOAD: 'app/LOAD',
  LOADED: 'app/LOADED'
};

// Reducer
export default function reducer(state = false, action) {
  switch (action.type) {
    case types.LOADED:
      return true;
    default:
      return state;
  }
}

// Action Creators
export function load() {
  return { type: types.LOAD };
}

export function loaded() {
  return { type: types.LOADED };
}

export const actions = {
  load,
  loaded
};
