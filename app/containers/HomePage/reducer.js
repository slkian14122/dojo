import produce from 'immer';

// The initial state of the App
export const initialState = {
  color: {
    square1: 'red',
    square2: 'green',
    square3: 'blue',
    square4: 'yellow',
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState) =>
  // eslint-disable-next-line consistent-return
  produce(state, () => {});

export default homeReducer;
