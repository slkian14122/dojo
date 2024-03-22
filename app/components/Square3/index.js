/**
 *
 * Square3
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import styled from 'styled-components';
const SquareComponent = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
`;
// eslint-disable-next-line react/prop-types
function Square3({ bgSquare3 }) {
  return (
    <div>
      <SquareComponent style={{ background: `${bgSquare3}` }}>
        <p style={{ position: 'absolute', bottom: 0, right: 20, fontSize: 50 }}>
          3
        </p>
      </SquareComponent>
    </div>
  );
}

Square3.propTypes = {};

export default Square3;
