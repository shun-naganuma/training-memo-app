import React from 'react'
import styled from 'styled-components'
import * as color from './color'

export function TitleHeader({ className }: { className?: string }) {
  return (
    <Container className={className}>
      <AppTitle>トレーニングメモ</AppTitle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.Navy};
`

const AppTitle = styled.div`
  color: ${color.Silver};
  font-size: 16px;
  font-weight: bold;
`
