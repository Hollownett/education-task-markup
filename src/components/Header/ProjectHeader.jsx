import React from 'react'

import {
  Header as AppHeader,
  HederTitle,
  HeaderContainer,
  ParticipantsContainer,
  TitleContainer,
  IconContainer,
  TitleIcon,
  LinksContainer,
  Links,
  ParticipantQty,
  ParticipantIcon,
} from './components'

function ProjectHeader(props) {
  return (
    <AppHeader>
      <TitleContainer>
        <HeaderContainer>
          <IconContainer width={40} height={40} margin={15}>
            <TitleIcon />
          </IconContainer>
          <HederTitle>{props.headerTitle}</HederTitle>
        </HeaderContainer>

        <LinksContainer>
          <Links
            exact
            activeStyle={{
              textDecorationColor: '#FFC200',
              textDecorationLine: 'underline',
            }}
            to="/tasks">
            Tasks
          </Links>
          <Links
            exact
            activeStyle={{
              textDecorationColor: '#FFC200',
              textDecorationLine: 'underline',
            }}
            to="/boards">
            Boards
          </Links>
          <Links
            exact
            activeStyle={{
              textDecorationColor: '#FFC200',
              textDecorationLine: 'underline',
            }}
            to="/activity">
            Activity
          </Links>
          <Links
            exact
            activeStyle={{
              textDecorationColor: '#FFC200',
              textDecorationLine: 'underline',
            }}
            to="/calendar">
            Calendar
          </Links>
        </LinksContainer>
      </TitleContainer>
      <ParticipantsContainer>
        <IconContainer width={30} height={30} margin={15}>
          <ParticipantIcon />
        </IconContainer>
        <IconContainer width={30} height={30} margin={15}>
          <ParticipantIcon />
        </IconContainer>
        <IconContainer width={30} height={30} margin={15}>
          <ParticipantIcon />
        </IconContainer>
        <ParticipantQty>5 participants</ParticipantQty>
      </ParticipantsContainer>
    </AppHeader>
  )
}

export default ProjectHeader
