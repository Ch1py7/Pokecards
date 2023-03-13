import { PokemonTypes } from 'types/pokemon.types'

export const GetPokemon = () => {
	const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'

	return fetch(apiUrl)
		.then((res) => res.json())
		.then((response: PokemonTypes.PokemonListResponse) => {
			response.results
		})
}
