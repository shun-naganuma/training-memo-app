import React from 'react'
import styled from 'styled-components'
import * as color from './color'

export function TitleHeader({ className }: { className?: string }) {
  return (
    <Container className={className}>
      <AppTitle>Training memo</AppTitle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.Olive};
`

const AppTitle = styled.div`
  color: ${color.LightSilver};
  font-size: 32px;
  font-weight: bold;
  font-family: 'Roboto';
`
