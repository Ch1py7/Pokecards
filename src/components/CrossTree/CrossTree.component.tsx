import { FC, ReactElement, useContext, useEffect, useState } from 'react'
import * as S from './CrossTree.styles'
import { DataContext } from 'context/data.context'
import { Arrow } from 'assets/arrow'

export const CrossTree: FC = (): ReactElement => {
	const { switchPokemonSide } = useContext(DataContext)

	return (
		<S.CrossTree>
			<S.CrosstreeBtn onClick={switchPokemonSide}>
				<Arrow height='18px' width='18px' fill='#1b1b1b' stroke='#141414' />
			</S.CrosstreeBtn>
			<S.CrosstreeBtn>
				<Arrow height='18px' width='18px' fill='#1b1b1b' stroke='#141414' />
			</S.CrosstreeBtn>
			<S.CrosstreeBtn onClick={switchPokemonSide}>
				<Arrow height='18px' width='18px' fill='#1b1b1b' stroke='#141414' />
			</S.CrosstreeBtn>
			<S.CrosstreeBtn>
				<Arrow height='18px' width='18px' fill='#1b1b1b' stroke='#141414' />
			</S.CrosstreeBtn>
		</S.CrossTree>
	)
}
