import { useState, useEffect, useCallback } from 'react'
import { PokemonTypes } from 'types/pokemon.types'

export interface UsePokemonListProps {
	limit: number
}

const createUrl = ({ limit }: UsePokemonListProps) => `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`

export const usePokemonList = (props: UsePokemonListProps) => {
	const [pokemonList, setPokemonList] = useState<PokemonTypes.PokemonListItem[]>([])

	const fetchPokemonList = useCallback(async () => {
		try {
			const res = await fetch(createUrl(props))
			const data: PokemonTypes.PokemonListResponse = await res.json()
			setPokemonList(data.results)
		} catch (error) {
			console.error(error)
		}
	}, [props, createUrl])

	useEffect(() => {
		fetchPokemonList()
	}, [fetchPokemonList])

	return { pokemonList }
}
