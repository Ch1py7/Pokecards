import { FC, ReactElement, useState, Fragment } from 'react'
import { Pokemon } from 'components/Pokemon'
import { PokemonTable } from 'components/PokemonTable'
import { usePokemonList } from 'hooks/usePokemonList'
import { Header } from 'components/Header'

const LIMIT = 20 //1281

export const App: FC = (): ReactElement => {
	const { pokemonList } = usePokemonList({ limit: LIMIT, offset: 0 })

	return (
		<Fragment>
			<Header />
			<PokemonTable>
				{pokemonList.map((pokemon, index) => (
					<Pokemon key={index} pokemon={pokemon} />
				))}
			</PokemonTable>
		</Fragment>
	)
}
