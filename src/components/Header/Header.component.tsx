import { FC, ReactElement } from 'react'
import * as S from './Header.styles'

export const Header: FC = (): ReactElement => {
	return (
		<S.Header>
			<S.Title>
				P o k e <i>c a r d s</i>
			</S.Title>
		</S.Header>
	)
}
