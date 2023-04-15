import styled from 'styled-components'

export interface PokeStats {
	type?: string
}

export const PokemonMainData = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10rem;
  aspect-ratio: 1/1;
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

export const PokemonImg = styled.img<PokeStats>`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${(props) => `#${props.type}`};
  border-radius: 20%;
`

export const PokemonData = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 100%;
  margin: 4px 0;
`
