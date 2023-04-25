import { FC, ReactElement, useContext } from 'react'
import * as S from './GreenScreen.styles'
import { DataContext } from 'context/data.context'

export const GreenScreen: FC = (): ReactElement => {
	const { data } = useContext(DataContext)
	return (
		<S.GreenScreen>
			<S.PokemonName>{data?.name}</S.PokemonName>
		</S.GreenScreen>
	)
}
