/**
 *
 * Square4
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import styled from 'styled-components';
const SquareComponent = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
`;
// eslint-disable-next-line react/prop-types
function Square4({ bgSquare4 }) {
  return (
    <div>
      <SquareComponent style={{ background: `${bgSquare4}` }}>
        <p style={{ position: 'absolute', bottom: 0, right: 20, fontSize: 50 }}>
          4
        </p>
      </SquareComponent>
    </div>
  );
}

Square4.propTypes = {};

export default Square4;
