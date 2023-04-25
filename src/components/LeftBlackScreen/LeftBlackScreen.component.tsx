import { FC, ReactElement, useContext } from 'react'
import * as S from './LeftBlackScreen.styles'
import { DataContext } from 'context/data.context'
import { colors } from 'utils/colors.utils'

export const LeftBlackScreen: FC = (): ReactElement => {
	const { data, isFront } = useContext(DataContext)

	const types = data?.types.map((type) => type.type.name)
	const front = data?.sprites.front_default
	const back = data?.sprites.back_default

	return (
		<S.LeftBlackScreen>
			<S.PokemonImg src={isFront ? front : back} alt='No photo yet' draggable='false' />
			{types && <S.PokemonTypeColor type={colors[types[0]]} type2={colors[types[1]]} />}
		</S.LeftBlackScreen>
	)
}
