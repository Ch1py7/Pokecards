import * as S from './Pokemon.styles'
import { FC, HTMLAttributes, ReactElement, useEffect, useState } from 'react'
import { PokemonTypes } from 'types/pokemon.types'
import { colors } from 'utils/colors.utils'

interface PokemonProps extends HTMLAttributes<HTMLElement> {
	pokemon: PokemonTypes.PokemonListItem
}

export const Pokemon: FC<PokemonProps> = ({ pokemon }): ReactElement => {
	const [pokemonData, setPokemonData] = useState<PokemonTypes.PokemonResponse>()

	useEffect(() => {
		fetch(pokemon.url)
			.then((res) => res.json())
			.then((data: PokemonTypes.PokemonResponse) => setPokemonData(data))
			.catch(() => console.log(pokemon.url))
	}, [pokemon.url])

	const types = pokemonData?.types.map((type) => type.type.name)

	return (
		<S.PokemonMainData>
			{pokemonData && (
				<S.PokemonAnchor href={`/pokemon/${pokemonData.id}`}>
					{types && <S.PokemonImg src={pokemonData.sprites.front_default} type={colors[types[0]]} />}
					<S.PokemonData>{pokemonData.name}</S.PokemonData>
				</S.PokemonAnchor>
			)}
		</S.PokemonMainData>
	)
}
