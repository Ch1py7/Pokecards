import { FC, ReactElement, Fragment } from 'react'
import { PokemonTable } from 'components/PokemonTable'
import { Route } from 'wouter'


export const App: FC = (): ReactElement => {

	return (
		<Fragment>
      <Route component={PokemonTable} path='/' />
		</Fragment>
	)
}
