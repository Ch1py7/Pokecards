import { FC, ReactElement } from 'react'
import * as S from './PokemonTable.styles'

export interface PokemonTableProps {
	children: ReactElement | ReactElement[]
}

export const PokemonTable: FC<PokemonTableProps> = ({ children }): ReactElement => {
	return <S.PokemonTable>{children}</S.PokemonTable>
}
