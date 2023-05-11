import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Header } from '../header/header';


const StyledLayout = styled.div`
  color: #232129;
  padding: 20px;
  font-family: 'Abel', cursive;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction:column;
  h1 {
    font-size: 2.85rem;
  }
  main {
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: normal;
  }

`

export const Layout:React.FC<{children: ReactNode}> = ({children}) => (
    <StyledLayout>
      <Header></Header>
        {children}
    </StyledLayout>
);