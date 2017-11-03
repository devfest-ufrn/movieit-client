// Actions
export const types = {
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
export function loaded() {
  return { type: types.LOADED };
}

export const actions = {
  loaded
};
