import React from 'react'

import {
  Header as AppHeader,
  HederTitle,
  AddButton,
} from './components'

function Header(props) {
  return (
    <AppHeader>
      <HederTitle>{props.headerTitle}</HederTitle>
      <AddButton>+Add</AddButton>
    </AppHeader>
  )
}

export default Header
