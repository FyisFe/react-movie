import React from 'react'

import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style'

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="rmbd-logo" />
      <TMDBLogoImg src={TMDBLogo} alt="tmbd-logo" />
    </Content>
  </Wrapper>
)

export default Header
