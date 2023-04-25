import styled from 'styled-components'
import { BoxStyles } from 'styles'

export interface PokeStats {
	type?: string
	type2?: string
}

export const LeftBlackScreen = styled.div`
  position: relative;
  ${BoxStyles.CenterFlex}
  width: 100%;
  height: 100%;
  background-color: #232323;
  border-radius: 3px;
`

export const PokemonImg = styled.img`
  position: fixed;
  z-index: 1;
  width: 10rem;
  aspect-ratio: 1/1;
`

export const PokemonTypeColor = styled.div<PokeStats>`
  position: absolute;
  width: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background:  ${(props) => `linear-gradient(45deg, #${props.type}, #${props.type2})`};
  background-color: ${(props) => `#${props.type}`};
`
