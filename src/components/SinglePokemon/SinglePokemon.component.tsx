import { FC, ReactElement, useState } from 'react'
import * as S from './SinglePokemon.styles'
import { Header } from 'components/Header'
import { Case } from 'components/Case'
import { LeftBlackScreen } from 'components/LeftBlackScreen'
import { RightBlackScreen } from 'components/RightBlackScreen'
import { GreenScreen } from 'components/GreenScreen'
import { CrossTree } from 'components/CrossTree'
import { WhiteBtns } from 'components/WhiteBtns'
import { SmallBlackScreens } from 'components/SmallBlackScreens'
import { ApiContextProvider } from 'context/data.context'

export interface SinglePokemonProps {
	params: {
		id: number
	}
}

export const SinglePokemon: FC<SinglePokemonProps> = ({ params: { id } }): ReactElement => {
	const [window, setWindow] = useState<boolean>(true)
	const handleClick = () => {
		setWindow((prev) => !prev)
	}

	return (
		<>
			<Header />
			<S.Pokedex>
				<ApiContextProvider id={id}>
					<Case
						leftScreen={<LeftBlackScreen />}
						rightScreen={<RightBlackScreen window={window} />}
						greenScreen={<GreenScreen />}
						leftControls={<CrossTree />}
						whiteBtns={<WhiteBtns handleClick={handleClick} />}
						smallBlackScreens={<SmallBlackScreens />}
					/>
				</ApiContextProvider>
			</S.Pokedex>
		</>
	)
}
