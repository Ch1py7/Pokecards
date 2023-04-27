import { FC, ReactElement } from 'react'
import { PokemonTable } from 'components/PokemonTable'
import { SinglePokemon } from 'components/SinglePokemon'
import { Route, Router } from 'wouter'

export const App: FC = (): ReactElement => {
	return (
		<Router>
			<Route component={PokemonTable} path='/' />
			<Route component={SinglePokemon} path='/pokemon/:id' />
    </Router>
	)
}
