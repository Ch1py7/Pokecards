import { css } from 'styled-components'

export module BoxStyles {
	export const CenterFlex = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `

	export const AbsCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

	export const BtnShine = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border-radius: 50%;
    content: '';
    background-color: inherit;
    transform: translate(-50%, -50%);
    filter: brightness(200%) opacity(0.4);
  `

	export const WhiteCell = css`
    width: 50%;
    border: 1px solid #222222;
    border-bottom: 0px;
    border-left: 0px;
    background-color: #e1e1e0;
  `
}
