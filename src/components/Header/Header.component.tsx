import React, { FC, ReactElement, useState } from 'react'
import * as S from './Header.styles'
import { Burger } from 'components/Burger'
import { useLocation } from 'wouter'

export const Header: FC = (): ReactElement => {
	const [burger, setBurger] = useState<boolean>(true)
	const [userInput, setUserInput] = useState<string>()
	const [_, setPushLocation] = useLocation()

	const onClickBurguer = () => {
		setBurger((prev) => !prev)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setPushLocation(`/pokemon/${userInput}`)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(event.target.value)
	}

	return (
		<S.Header>
			<a href='/'>
				<S.HeaderLogo />
			</a>
			<S.HeaderForm onSubmit={handleSubmit}>
				<S.HeaderSearch type='text' placeholder='Search a pokemon' onChange={handleChange} />
			</S.HeaderForm>
			<Burger burger={burger} onClickBurger={onClickBurguer} />
			<S.Socials className={burger ? 'noShowSocials' : 'showSocials'}>
				<a href='https://github.com/ch1py7' target='_BLANK' rel='noreferrer'>
					<S.HeaderSocial src='/github.png' />
				</a>
				<a href='https://twitter.com/bulbsum' target='_BLANK' rel='noreferrer'>
					<S.HeaderSocial src='/twitter.png' />
				</a>
			</S.Socials>
		</S.Header>
	)
}
