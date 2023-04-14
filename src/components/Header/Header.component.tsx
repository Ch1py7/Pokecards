import { FC, ReactElement, useState } from 'react'
import * as S from './Header.styles'
import { Burger } from 'components/Burger'

export const Header: FC = (): ReactElement => {
	const [burger, setBurger] = useState<boolean>(true)

	const onClickBurguer = () => {
		setBurger((prev) => !prev)
	}

	return (
		<S.Header>
			<S.HeaderLogo />
			<S.HeaderSearch type='text' placeholder='Search a pokemon' />
			<Burger burger={burger} onClickBurger={onClickBurguer} />
			<S.Socials className={burger ? 'noShowSocials' : 'showSocials'}>
				<S.HeaderSocial src='/github.png' />
				<S.HeaderSocial src='/twitter.png' />
			</S.Socials>
		</S.Header>
	)
}
