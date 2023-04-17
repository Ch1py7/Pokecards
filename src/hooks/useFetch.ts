import { useEffect, useState } from 'react'
import { PokemonTypes } from 'types/pokemon.types'

export interface useFetchProps {
	url: string
}

export const useFetch = ({ url }: useFetchProps) => {
	const [state, setState] = useState<PokemonTypes.PokemonResponse>(Object)

	const fetchPokemons = async () => {
		try {
			const res = await fetch(url)
			const data: PokemonTypes.PokemonResponse = await res.json()
			setState(data)
		} catch (error) {
			console.log(`Error uwu: ${error}`)
		}
	}

	useEffect(() => {
		fetchPokemons()
	}, [fetchPokemons])

	return { data: state }
}
