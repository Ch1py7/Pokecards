import { FC, ReactElement } from 'react'
import * as S from './PokemonTable.styles'
import { Header } from 'components/Header'
import { usePokemonList } from 'hooks/usePokemonList'
import { Pokemon } from 'components/Pokemon'

const LIMIT = 150 //1281

export const PokemonTable: FC = (): ReactElement => {
	const { pokemonList } = usePokemonList({ limit: LIMIT })

	return (
		<>
			<Header />
			<S.PokemonTable>
				{pokemonList.map((pokemon, index) => (
					<Pokemon key={index} pokemon={pokemon} />
				))}
			</S.PokemonTable>
		</>
	)
}
