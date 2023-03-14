import styled from 'styled-components'

export interface PokemonContainerProps {
	selected?: boolean
}

export interface VisibilityProps {
	visibility?: number
	nonVisibility?: number
}

export interface PokeStats {
	type?: string
}

export const PokemonMainData = styled.article<PokemonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120%;
  min-height: 30rem;
  border-radius: 2rem;
  background: linear-gradient(120deg, #387eff, #387eff, #2a39db);
  box-shadow: 5px 5px 5px 0 #000, 6px 6px 1rem #000;  
  font-family: cursive;
  transition: scale 0.2s linear;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`

export const PokemonInformation = styled.div<VisibilityProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: clamp(2rem, 26rem, 26rem);
  transition: opacity 0.3s ease-in-out, z-index 0.3s ease-in-out;
  opacity: ${(props) => `${props.visibility}`};
  z-index: ${(props) => `${props.visibility}`};
  user-select: none;
`

export const PokemonStats = styled.div<VisibilityProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: clamp(2rem, 26rem, 26rem);
  height: 26rem;
  transition: opacity 0.3s ease-in-out, z-index 0.3s ease-in-out;
  opacity: ${(props) => `${props.nonVisibility}`};
  z-index: ${(props) => `${props.nonVisibility}`};
  user-select: none;
`
export const PokemonType = styled.div`
  display: flex;
  gap: 1rem;
`

export const PokemonId = styled.p`
  font-weight: bold;
  font-size: 200%;
`

export const PokemonImg = styled.img<PokeStats>`
  width: 70%;
  aspect-ratio: 1/1;
  background-color: ${(props) => `#${props.type}`};
  border-radius: 20%;
  margin: 0 auto;
`

export const PokemonData = styled.h1`
  font-weight: normal;
  text-transform: capitalize;
  font-size: 220%;
`
