/**
 *
 * Square2
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const SquareComponent = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
`;
// eslint-disable-next-line react/prop-types
function Square2({ bgSquare2 }) {
  return (
    <SquareComponent style={{ background: `${bgSquare2}` }}>
      <p style={{ position: 'absolute', bottom: 0, right: 20, fontSize: 50 }}>
        2
      </p>
    </SquareComponent>
  );
}

Square2.propTypes = {};

export default Square2;
