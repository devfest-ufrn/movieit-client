import moment from 'moment';

// Actions
export const types = {
  SET: 'active-day/SET',
  ADD: 'active-day/ADD',
  SUBTRACT: 'active-day/SUBTRACT'
};

const initialDay = moment().format('YYYY-MM-DD');

// Reducer
export default function reducer(state = initialDay, action) {
  let activeDay = state;

  switch (action.type) {
    case types.SET:
      return action.payload;
    case types.ADD:
      return moment(activeDay).add(1, 'days').format('YYYY-MM-DD');
    case types.SUBTRACT:
      return moment(activeDay).subtract(1, 'days').format('YYYY-MM-DD');
    default:
      return state;
  }
}

// Action Creators
export function set(payload) {
  return { type: types.SET, payload };
}

export function add() {
  return { type: types.ADD };
}

export function subtract() {
  return { type: types.SUBTRACT };
}

export const actions = {
  set,
  add,
  subtract
};
