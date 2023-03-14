import { FC, ReactElement } from 'react'
import * as S from './Header.styles'

export const Header: FC = (): ReactElement => {
	return (
		<S.Header>
			<S.Logo alt='logo' src='/public/logo.png' />
		</S.Header>
	)
}
