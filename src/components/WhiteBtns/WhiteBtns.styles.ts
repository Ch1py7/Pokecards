import styled from 'styled-components'
import { BoxStyles } from 'styles'

export const CaseGridCell = styled.div`
  ${BoxStyles.CenterFlex}
  border-right: 1px solid #222222;
  &:last-of-type > svg {
    transform: rotate(180deg);
  }
`

export const WhiteBtns = styled.div`
  display: flex;
  width: 6rem;
  height: 3rem;
  box-shadow: 0 2px 1px #222222;
  cursor: pointer;
  & ${CaseGridCell}:nth-child(1) {
    ${BoxStyles.WhiteCell}
  }
  & ${CaseGridCell}:nth-child(2) {
    ${BoxStyles.WhiteCell}
  }
`
