import { FC, ReactElement } from 'react'
import * as S from './WhiteBtns.styles'
import { Arrow } from 'assets/arrow'

export interface WhiteBtnsProps {
	handleClick: () => void
}

export const WhiteBtns: FC<WhiteBtnsProps> = ({ handleClick }): ReactElement => {
	return (
		<S.WhiteBtns>
			<S.CaseGridCell onClick={handleClick}>
				<Arrow height='24px' width='24px' fill='#d2d2d1 ' stroke='#c8c8c8' />
			</S.CaseGridCell>
			<S.CaseGridCell onClick={handleClick}>
				<Arrow height='24px' width='24px' fill='#d2d2d1 ' stroke='#c8c8c8' />
			</S.CaseGridCell>
		</S.WhiteBtns>
	)
}
