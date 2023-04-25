import { useFetch } from 'hooks/useFetch'
import { Dispatch, SetStateAction, createContext, ReactElement, FC, useState } from 'react'
import { PokemonTypes } from 'types/pokemon.types'

interface APIContextProviderProps {
	children: ReactElement | ReactElement[]
	id: string
}

interface DataContextState {
	data?: PokemonTypes.PokemonResponse
	isFront: boolean
	setIsFront: Dispatch<SetStateAction<boolean>>
	switchPokemonSide: () => void
}

export const DataContext = createContext<DataContextState>({
	isFront: true,
	setIsFront: () => {},
	switchPokemonSide: () => {},
})

export const ApiContextProvider: FC<APIContextProviderProps> = ({ children, id }) => {
	const { data } = useFetch<PokemonTypes.PokemonResponse>({ url: `https://pokeapi.co/api/v2/pokemon/${id}` })
	const [isFront, setIsFront] = useState<boolean>(true)

	const switchPokemonSide = () => {
		setIsFront((prev) => !prev)
	}

	return (
		<DataContext.Provider value={{ data, isFront, setIsFront, switchPokemonSide }}>
			{data && children}
		</DataContext.Provider>
	)
}
