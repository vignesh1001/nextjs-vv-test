/** @format */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext } from 'react';

const Layout = (props) => {
  return (
    <>
      <div
        css={css`
                    margin-bottom: 80px;
                `}
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
