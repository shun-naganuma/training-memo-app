import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { CardFilter } from './CardFilter'

export function Header({
  filterValue,
  onFilterChange,
  className,
}: {
  filterValue?: string
  onFilterChange?(value: string): void
  className?: string
}) {
  // 現在の日付を取得し、フォーマットする関数
  const getCurrentDate = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')

    return `${year}年${month}月${day}日` // YYYY-MM-DD 形式
  }

  return (
    <Container className={className}>
      <Logo>{getCurrentDate()}</Logo> {/* 現在の日付を表示に変更 */}
      <CardFilter value={filterValue} onChange={onFilterChange} />
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

const Logo = styled.div`
  color: ${color.Silver};
  font-size: 16px;
  font-weight: bold;
`
