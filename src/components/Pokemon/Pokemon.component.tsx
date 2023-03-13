import * as S from './Pokemon.styles'
import { FC, Fragment, HTMLAttributes, ReactElement, useEffect, useState, useMemo } from 'react'
import { PokemonTypes } from 'types/pokemon.types'

interface PokemonProps extends S.PokemonContainerProps, HTMLAttributes<HTMLElement> {
	pokemon: PokemonTypes.PokemonListItem
}

export const Pokemon: FC<PokemonProps> = ({ pokemon, selected, ...rest }): ReactElement => {
	const [pokemonData, setPokemonData] = useState<PokemonTypes.PokemonResponse | null>(null)
	const [visibility, setVisibiliy] = useState(1)
	const [nonVisibility, setNonVisibiliy] = useState(0)

	const handleVisibility = () => () => {
		if (visibility) {
			setVisibiliy(0)
			setNonVisibiliy(1)
		} else {
			setVisibiliy(1)
			setNonVisibiliy(0)
		}
	}

	useEffect(() => {
		fetch(pokemon.url)
			.then((res) => res.json())
			.then((data: PokemonTypes.PokemonResponse) => setPokemonData(data))
			.catch(() => console.log(pokemon.url))
	}, [pokemon.url])

	const types: string[] | undefined = pokemonData?.types.map((type, _) => type.type.name)
	const type = types?.map((types) => {
		if (types === 'bug') {
			return 'lightgreen'
		} else if (types === 'grass') {
			return 'darkgreen'
		} else if (types === 'fire') {
			return 'darkorange'
		} else if (types === 'water') {
			return 'lightblue'
		} else if (types === 'normal') {
			return 'grey'
		} else if (types === 'poison') {
			return 'blueviolet'
		} else if (types === 'electric') {
			return 'yellow'
		} else if (types === 'ground') {
			return 'burlywood'
		} else if (types === 'fairy') {
			return 'pink'
		} else if (types === 'fighting') {
			return 'darkred'
		} else if (types === 'psychic') {
			return 'darksalmon'
		} else if (types === 'rock') {
			return 'darkgoldenrod'
		} else if (types === 'ice') {
			return 'cornflowerblue'
		} else if (types === 'dragon') {
			return 'purple'
		} else if (types === 'dark') {
			return 'darkslategray'
		}
	})
	const trueType = type?.shift()

	return (
		<S.PokemonMainData selected={selected} {...rest}>
			{pokemonData && (
				<Fragment>
					<S.PokemonInformation onClick={handleVisibility()} visibility={visibility}>
						<S.PokemonId>{pokemonData.id}</S.PokemonId>
						<S.PokemonImg src={pokemonData.sprites.front_default} type={trueType} />
						<S.PokemonData>{pokemonData.name}</S.PokemonData>
						<S.PokemonData>Altura: {pokemonData.height / 10}m</S.PokemonData>
						<S.PokemonData>Peso: {pokemonData.weight / 10}kg</S.PokemonData>
					</S.PokemonInformation>
					<S.PokemonStats onClick={handleVisibility()} nonVisibility={nonVisibility}>
						{pokemonData.stats.map((stat, index) => (
							<S.PokemonData key={index}>
								{stat.stat.name}: {stat.base_stat}
							</S.PokemonData>
						))}
						<S.PokemonType>
							{pokemonData.types.map((type, index) => (
								<S.PokemonData key={index}>{type.type.name}</S.PokemonData>
							))}
						</S.PokemonType>
					</S.PokemonStats>
				</Fragment>
			)}
		</S.PokemonMainData>
	)
}
