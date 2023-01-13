import styled from 'styled-components'
import { theme } from '../Theme'
import Button from './Button'

export const StyledButoon = styled.button`
  background-color: ${prop =>
    prop.backgroundColor ? prop.backgroundColor : 'pink'};
  width: 100px;
  height: ${({theme}) => theme.size.xxl};
  cursor: pointer;

  &:active {
    background-color: pink;
  }
`
export const Button2 = styled(Button)`
  background-color: ${({theme}) => theme.colors.secondary};
  width: 100px;
  height: 60px;
  cursor: pointer;
`
