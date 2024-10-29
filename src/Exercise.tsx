import React from 'react'
import styled from 'styled-components'
import * as color from './color'

export function Exercise() {
  return (
    <Container>
      <ExerciseName>ベンチプレス</ExerciseName>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.Silver};
`

const ExerciseName = styled.div`
  color: ${color.Black};
  font-size: 16px;
  font-weight: bold;
`
