import { useCallback, useEffect, useState } from 'react'

export interface useFetchProps {
	url: string
}

export const useFetch = <T>({ url }: useFetchProps) => {
	const [state, setState] = useState<T | undefined>()

	const fetchPokemons = useCallback(async () => {
		try {
			const res = await fetch(url)
			const data: T = await res.json()
			setState(data)
		} catch (error) {
			console.log(`Error: ${error}`)
		}
	}, [url])

	useEffect(() => {
		fetchPokemons()
	}, [fetchPokemons])

	return { data: state }
}
