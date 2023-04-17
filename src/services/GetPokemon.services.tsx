interface GetPokemonsProps {
	id: string
}

export const GetPokemons = async ({ id }: GetPokemonsProps) => {
	const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

	return fetch(apiUrl)
		.then((res) => res.json())
		.then((response) => {
			const { name } = response
			return name
		})
}
