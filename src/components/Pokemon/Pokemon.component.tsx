import * as S from './Pokemon.styles'
import { FC, HTMLAttributes, ReactElement, useEffect, useState } from 'react'
import { PokemonTypes } from 'types/pokemon.types'

interface PokemonProps extends HTMLAttributes<HTMLElement> {
	pokemon: PokemonTypes.PokemonListItem
}

export const Pokemon: FC<PokemonProps> = ({ pokemon, ...rest }): ReactElement => {
	const [pokemonData, setPokemonData] = useState<PokemonTypes.PokemonResponse | null>(null)

	useEffect(() => {
		fetch(pokemon.url)
			.then((res) => res.json())
			.then((data: PokemonTypes.PokemonResponse) => setPokemonData(data))
			.catch(() => console.log(pokemon.url))
	}, [pokemon.url])

	const types: string[] | undefined = pokemonData?.types.map((type, _) => type.type.name)
	const type = types?.map((types) => {
		if (types === 'bug') {
			return 'aabb22'
		} else if (types === 'grass') {
			return '77cc55'
		} else if (types === 'fire') {
			return 'ff4422'
		} else if (types === 'water') {
			return '3399ff'
		} else if (types === 'normal') {
			return 'bbbbaa'
		} else if (types === 'poison') {
			return 'aa5599'
		} else if (types === 'electric') {
			return 'ffcc33'
		} else if (types === 'ground') {
			return 'ddbb55'
		} else if (types === 'fairy') {
			return 'ffaaff'
		} else if (types === 'fighting') {
			return 'bb5544'
		} else if (types === 'psychic') {
			return 'ff5599'
		} else if (types === 'rock') {
			return 'bbaa66'
		} else if (types === 'ghost') {
			return '6666aa'
		} else if (types === 'ice') {
			return '77ddff'
		} else if (types === 'dragon') {
			return '7766ee'
		}
	})
	const trueType = type?.shift()

	return (
		<S.PokemonMainData {...rest}>
			{pokemonData && (
        <>
          <S.PokemonImg src={pokemonData.sprites.front_default} type={trueType} />
          <S.PokemonData>{pokemonData.name}</S.PokemonData>
        </>
			)}
		</S.PokemonMainData>
	)
}
