import styled from 'styled-components'
import { BoxStyles } from 'styles'

export interface PokeStats {
	type?: string
	type2?: string
}

export const MediumScreen = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #262626;
`

export const Power = styled.p<PokeStats>`
  ${BoxStyles.CenterFlex}
  width: 3.3rem;
  height: 1.2rem;
  margin: 1px;
  border: 1px solid #e1e1e0;
  border-radius: 1rem;
  background-color: ${(props) => `#${props.type}`};
  font-family: 'Minecraft';
  font-size: 8px;
`
