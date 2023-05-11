import React from 'react'
import styled from '@emotion/styled'

const StyledHeader = styled.div`
  margin-top: 0px;
  margin-bottom: 64px;
  max-width: 320px;
`

export const Header: React.FC = () => (
    <StyledHeader>
        <h1>
            R&G
        <br />
        <span style={{
            color: '#a5d7e0'
        }}>Ministries</span>
    </h1>
    </StyledHeader>
);