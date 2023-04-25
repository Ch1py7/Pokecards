import { FC, ReactElement, useContext, useEffect, useState } from 'react'
import * as S from './RightBlackScreen.styles'
import { PokemonTypes } from 'types/pokemon.types'
import { PokemonStats } from 'components/PokemonStats'
import { PokemonPhrase } from 'components/PokemonPhrase'
import { PokemonPhraseProps } from 'components/PokemonPhrase'
import { DataContext } from 'context/data.context'

export interface RightBlackScreenProps extends PokemonPhraseProps {
	window: boolean
}

export const RightBlackScreen: FC<RightBlackScreenProps> = ({ window }): ReactElement => {
	const { data } = useContext(DataContext)
	const [phrase, setPhrase] = useState<PokemonTypes.PokemonResponse>()

	useEffect(() => {
		if (data?.species.url) {
			fetch(data?.species.url)
				.then((res) => res.json())
				.then((data: PokemonTypes.PokemonResponse) => setPhrase(data))
				.catch(() => console.log(data?.species.url))
		}
	}, [data?.species.url])

	const original = phrase?.flavor_text_entries[0]?.flavor_text ?? 'No description this time.'
	const trueText = original?.replace(/\n/g, ' ').replace(/\f/g, ' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

	return <S.RightBlackScreen>{window ? <PokemonPhrase phrase={trueText} /> : <PokemonStats />}</S.RightBlackScreen>
}
