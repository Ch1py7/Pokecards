import { FC, ReactElement } from 'react'
import * as S from './PokemonPhrase.styles'

export interface PokemonPhraseProps {
	phrase?: string
}

export const PokemonPhrase: FC<PokemonPhraseProps> = ({ phrase }): ReactElement => {
	return <S.PokemonPhrase>{phrase}</S.PokemonPhrase>
}
