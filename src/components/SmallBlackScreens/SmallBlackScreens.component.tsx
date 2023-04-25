import { FC, ReactElement, useContext, useState, useEffect } from 'react'
import * as S from './SmallBlackScreens.styles'
import { DataContext } from 'context/data.context'
import { PokemonTypes } from 'types/pokemon.types'
import { colors } from 'utils/colors.utils'

export const SmallBlackScreens: FC = (): ReactElement => {
	const [power, setPower] = useState<PokemonTypes.PokemonDamage>()
	const { data } = useContext(DataContext)

	useEffect(() => {
		if (data?.types[0].type.url)
			fetch(data?.types[0].type.url)
				.then((res) => res.json())
				.then((data: PokemonTypes.PokemonDamage) => setPower(data))
	}, [data])

	const underPower = power?.damage_relations.double_damage_from.map((type) => type.name)
	const overPower = power?.damage_relations.double_damage_to.map((type) => type.name)

	return (
		<>
			<S.MediumScreen>
				{underPower?.map((power, index) => (
					<S.Power type={colors[power]} key={index}>
						{power}
					</S.Power>
				))}
			</S.MediumScreen>
			<S.MediumScreen>
				{overPower?.map((power, index) => (
					<S.Power type={colors[power]} key={index}>
						{power}
					</S.Power>
				))}
			</S.MediumScreen>
		</>
	)
}
