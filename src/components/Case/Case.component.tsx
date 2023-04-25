import { FC, ReactElement } from 'react'
import * as S from './Case.styles'
import { Menu } from 'assets/menu'
import { Github } from 'assets/github'
import { Linkedin } from 'assets/linkedin'
import { Codepen } from 'assets/codepen'
import { Twitter } from 'assets/twitter'

export interface CaseProps {
	leftScreen: ReactElement | ReactElement[]
	rightScreen: ReactElement | ReactElement[]
	greenScreen: ReactElement | ReactElement[]
	leftControls: ReactElement | ReactElement[]
	smallBlackScreens: ReactElement | ReactElement[]
	whiteBtns: ReactElement | ReactElement[]
}

export const Case: FC<CaseProps> = ({
	leftScreen,
	rightScreen,
	greenScreen,
	leftControls,
	smallBlackScreens,
	whiteBtns,
}): ReactElement => {
	return (
		<S.Case>
			<S.CaseLeft>
				<S.CaseLeftMain>
					<S.CaseLeftTopWrapper>
						<S.CaseLeftTop>
							<S.CaseBtn color='29acff' width='6rem' height='6rem' marginLeft='1rem' marginTop='1.7rem' />
							<S.CaseBtn color='b1001d' width='1.2rem' height='1.2rem' marginLeft='1rem' marginTop='1.7rem' />
							<S.CaseBtn color='ddc700' width='1.2rem' height='1.2rem' marginLeft='1rem' marginTop='1.7rem' />
							<S.CaseBtn color='66ad73' width='1.2rem' height='1.2rem' marginLeft='1rem' marginTop='1.7rem' />
						</S.CaseLeftTop>
					</S.CaseLeftTopWrapper>
					<S.CaseLeftScreen>
						<S.CaseScreenBorderGrey>
							<S.CaseScreenTopBtn>
								<S.CaseBtn color='b1001d' width='8px' height='8px' marginLeft='0' marginTop='0' />
								<S.CaseBtn color='b1001d' width='8px' height='8px' marginLeft='0' marginTop='0' />
							</S.CaseScreenTopBtn>
							{leftScreen}
							<S.CaseScreenBottomBtn>
								<S.CaseBtn color='b1001d' width='1.2rem' height='1.2rem' marginLeft='0' marginTop='5px' />
								<S.CaseBurger>
									<S.CaseBurgerSpan />
									<S.CaseBurgerSpan />
									<S.CaseBurgerSpan />
									<S.CaseBurgerSpan />
								</S.CaseBurger>
							</S.CaseScreenBottomBtn>
						</S.CaseScreenBorderGrey>
					</S.CaseLeftScreen>
					<S.CaseLeftCommands>
						<S.CaseBigBlackBtn />
						<S.CaseCommandsCentral>
							<S.CaseLongRedBtn />
							<S.CaseLongBlueBtn />
							{greenScreen}
						</S.CaseCommandsCentral>
						{leftControls}
					</S.CaseLeftCommands>
				</S.CaseLeftMain>
				<S.CaseCentralCylinder>
					<S.CaseCylinderCentralBlock />
				</S.CaseCentralCylinder>
			</S.CaseLeft>
			<S.CaseRightWrapper>
				<S.CaseRight>
					{rightScreen}
					<S.CaseBlueGrid>
						<S.CaseGridCell />
						<S.CaseGridCell />
						<S.CaseGridCell />
						<S.CaseGridCell />
						<S.CaseGridCell />
						<S.CaseGridCell>
							<a href='https://twitter.com/bulbsum' target='_BLANK' rel='noreferrer'>
								<Twitter height='16px' width='16px' />
							</a>
						</S.CaseGridCell>
						<S.CaseGridCell>
							<a href='https://codepen.io/ch1py7' target='_BLANK' rel='noreferrer'>
								<Codepen height='16px' width='16px' />
							</a>
						</S.CaseGridCell>
						<S.CaseGridCell>
							<a href='https://www.linkedin.com/in/gerardogarcialopez-bulbsum/' target='_BLANK' rel='noreferrer'>
								<Linkedin width='14px' height='14px' />
							</a>
						</S.CaseGridCell>
						<S.CaseGridCell>
							<a href='https://www.github.com/ch1py7/' target='_BLANK' rel='noreferrer'>
								<Github width='12px' height='12px' />
							</a>
						</S.CaseGridCell>
						<S.CaseGridCell>
							<Menu width='13px' height='13px' />
						</S.CaseGridCell>
					</S.CaseBlueGrid>
					<S.CaseLongBtnRight>
						<S.CaseLongBtnRightCh />
						<S.CaseLongBtnRightCh />
					</S.CaseLongBtnRight>
					{whiteBtns}
					<S.CaseBtn
						style={{ justifySelf: 'self-end' }}
						color='ddc700'
						width='3rem'
						height='3rem'
						marginLeft='0'
						marginTop='5px'
					/>
					{smallBlackScreens}
				</S.CaseRight>
			</S.CaseRightWrapper>
		</S.Case>
	)
}
