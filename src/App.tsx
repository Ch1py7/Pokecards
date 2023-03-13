import { FC, ReactElement, useState, Fragment, useMemo } from 'react'
import { Pokemon } from 'components/Pokemon'
import { PokemonTable } from 'components/PokemonTable'
import { usePokemonList } from 'hooks/usePokemonList'
import { Header } from 'components/Header'

const LIMIT = 10

export const App: FC = (): ReactElement => {
	const [selected, setSelected] = useState(0)
	const [pagination, setPagination] = useState<number>(0)
	const { pokemonList } = usePokemonList({ limit: LIMIT, offset: pagination * LIMIT })

	const handlePagination = (page: number) => () => {
		resetSelected()
		setPagination((prev) => prev + page)
	}

	const resetSelected = () => {
		setSelected(0)
	}

	return (
		<Fragment>
			<Header />
			<PokemonTable>
				{pokemonList.map((pokemon, index) => (
					<Pokemon key={index} pokemon={pokemon} selected={index === selected} />
				))}
			</PokemonTable>
			<section className='superSection'>
				<button type='button' onClick={handlePagination(-1)} disabled={pagination === 0}>
					{'<'}
				</button>
				<button type='button' onClick={handlePagination(1)} disabled={pagination === 14}>
					{'>'}
				</button>
			</section>
		</Fragment>
	)
}
