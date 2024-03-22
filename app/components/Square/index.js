/**
 *
 * Square
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const SquareComponent = styled.div`
  width: 700px;
  height: 700px;
  position: absolute;
`;
// eslint-disable-next-line react/prop-types
function Square({ bgSquare1 }) {
  return (
    <>
      <SquareComponent style={{ background: `${bgSquare1}` }}>
        <p style={{ position: 'absolute', bottom: 0, right: 20, fontSize: 50 }}>
          1
        </p>
      </SquareComponent>
    </>
  );
}

Square.propTypes = {};

export default Square;
