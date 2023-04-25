import { FC, ReactElement, useContext } from 'react'
import * as S from './PokemonStats.styles'
import { DataContext } from 'context/data.context'

export const PokemonStats: FC = (): ReactElement => {
	const { data } = useContext(DataContext)

	return (
		<S.PokemonStats>
			<S.PokemonTitle>Stats:</S.PokemonTitle>
			<S.PokemonDescription>
				{data?.stats[0].stat.name}: &nbsp;&nbsp;&nbsp; {data?.stats[0].base_stat}
			</S.PokemonDescription>
			<S.PokemonDescription>
				{data?.stats[1].stat.name}: &nbsp;&nbsp;&nbsp; {data?.stats[1].base_stat}
			</S.PokemonDescription>
			<S.PokemonDescription>
				{data?.stats[2].stat.name}: &nbsp;&nbsp;&nbsp; {data?.stats[2].base_stat}
			</S.PokemonDescription>
			<S.PokemonDescription>
				{data?.stats[3].stat.name}: &nbsp;&nbsp;&nbsp; {data?.stats[3].base_stat}
			</S.PokemonDescription>
			<S.PokemonDescription>
				{data?.stats[4].stat.name}: &nbsp;&nbsp;&nbsp; {data?.stats[4].base_stat}
			</S.PokemonDescription>
			<S.PokemonDescription>
				{data?.stats[5].stat.name}: &nbsp;&nbsp;&nbsp; {data?.stats[5].base_stat}
			</S.PokemonDescription>
		</S.PokemonStats>
	)
}
