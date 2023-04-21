import { FC, ReactElement } from 'react'

export interface SvgTypes {
	width: string
	height: string
}

export const Menu: FC<SvgTypes> = ({ width, height }): ReactElement => {
	return (
		<svg
			width={width}
			height={height}
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="#000000"
		>
			<title>menu</title>
			<path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}
