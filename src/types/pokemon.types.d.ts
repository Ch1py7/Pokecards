export namespace PokemonTypes {
	export interface PokemonListItem {
		name: string
		url: URL
	}

	export interface PokemonListResponse {
		results: PokemonListItem[]
	}

	export interface PokemonResponse {
		flavor_text_entries: {
			flavor_text: string
		}[]
		abilities: Abilities[]
		id: number
		name: string
		base_experience: number
		forms: Form[]
		game_indices: GameIndex[]
		height: number
		is_default: boolean
		location_area_encounters: string
		moves: Moves[]
		order: number
		species: Species
		stats: Stats[]
		types: Types[]
		weight: number
		sprites: {
			back_default: string
			back_female: string
			back_shiny: string
			back_shiny_female: string
			front_default: string
			front_female: string
			front_shiny: string
			front_shiny_female: string
		}
	}

	export interface Abilities {
		name: string
		url: URL
	}

	export interface Form {
		name: string
		url: URL
	}

	export interface GameIndex {
		game_index: number
		version: Version
	}

	export interface Version {
		name: string
		url: URL
	}

	export interface Moves {
		move: Move
		version_group_details: VersionGroupDetail[]
	}

	export interface Move {
		name: string
		url: URL
	}

	export interface VersionGroupDetail {
		level_learned_at: number
		move_learn_method: {
			name: string
			url: URL
		}
		version_group: {
			name: string
			url: URL
		}
	}

	export interface Species {
		name: string
		url: URL
	}

	export interface Stat {
		name: string
		url: URL
	}

	export interface Stats {
		base_stat: number
		effort: number
		stat: Stat
	}

	export interface Type {
		name: string
		url: URL
	}

	export interface Types {
		slot: number
		type: Type
	}
}
