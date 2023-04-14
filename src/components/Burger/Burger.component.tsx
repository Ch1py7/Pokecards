import React, { FC, ReactElement } from 'react'
import * as S from './Burger.styles'

interface BurgerProps {
	burger: boolean
	onClickBurger: React.MouseEventHandler
}

export const Burger: FC<BurgerProps> = ({ burger, onClickBurger }): ReactElement => {
	return (
		<S.Burger onClick={onClickBurger}>
			<S.BurguerLine className={burger ? '' : 'firstLine'} />
			<S.BurguerLine className={burger ? '' : 'secLine'} />
			<S.BurguerLine className={burger ? '' : 'thirdLine'} />
		</S.Burger>
	)
}
