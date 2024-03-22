/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectColor = () =>
  createSelector(
    selectHome,
    homeState => homeState.color,
  );

export { selectHome, makeSelectColor };
