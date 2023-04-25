import { FC, ReactElement, Fragment } from 'react'
import { PokemonTable } from 'components/PokemonTable'
import { SinglePokemon } from 'components/SinglePokemon'
import { Route } from 'wouter'

export const App: FC = (): ReactElement => {
	return (
		<Fragment>
			<Route component={PokemonTable} path='/' />
			<Route component={SinglePokemon} path='/pokemon/:id' />
		</Fragment>
	)
}
