import { FC, ReactElement } from 'react'
import { SvgTypes } from './menu'

export interface ArrowProps extends SvgTypes {
	stroke: string
	fill: string
}

export const Arrow: FC<ArrowProps> = ({ width, height, stroke, fill }): ReactElement => {
	return (
		<svg
			width={width}
			height={height}
			strokeWidth='1.5'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			color='#000000'
		>
			<title>arrow</title>
			<path
				d='M3.685 18.783l7.88-14.008a.5.5 0 01.87 0l7.88 14.008a.5.5 0 01-.617.71l-7.517-2.922a.5.5 0 00-.362 0l-7.517 2.923a.5.5 0 01-.617-.711z'
				stroke={stroke}
				fill={fill}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
