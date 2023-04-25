import styled from 'styled-components'

export interface PokeStats {
	type?: string
}

export const PokemonMainData = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 12rem;
  height: 15rem;
  padding: 1rem;
  border-radius: 2rem;
  background: linear-gradient(120deg, #387eff, #387eff, #2a39db);
  box-shadow: 5px 5px 0 0 #0000009f;
  font-family: cursive;
  transition: scale 0.2s linear;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`

export const PokemonAnchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  color: #03045e;
  text-decoration: none;
`

export const PokemonImg = styled.img<PokeStats>`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${(props) => `#${props.type}`};
  border-radius: 20%;
`

export const PokemonData = styled.h1`
  margin: 4px 0;
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: capitalize;
`
