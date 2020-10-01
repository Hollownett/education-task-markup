import React from 'react'

import {
  Header as AppHeader,
  TitleContainer,
  HeaderContainer,
  HederTitle,
  AddButton,
} from './components'

function Header(props) {
  return (
    <AppHeader>
      <TitleContainer>
        <HeaderContainer>
          <HederTitle>{props.headerTitle}</HederTitle>
        </HeaderContainer>
      </TitleContainer>
      <AddButton>+Add</AddButton>
    </AppHeader>
  )
}

export default Header
