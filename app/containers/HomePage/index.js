/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Square from '../../components/Square';
import Square2 from '../../components/Square2';
import Square3 from '../../components/Square3';
import Square4 from '../../components/Square4';

import { makeSelectColor } from './selectors';
// eslint-disable-next-line react/prop-types
export function HomePage({ colors }) {
  console.log(colors);
  const bgSquare1 = 'red';
  const bgSquare2 = 'green';
  const bgSquare3 = 'blue';
  const bgSquare4 = 'yellow';
  return (
    <div style={{ position: 'relative' }}>
      <Square bgSquare1={bgSquare1} />
      <Square2 bgSquare2={bgSquare2} />
      <Square3 bgSquare3={bgSquare3} />
      <Square4 bgSquare4={bgSquare4} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  colors: makeSelectColor(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(HomePage);
