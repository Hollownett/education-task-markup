import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-direction: flex-end;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding-right: 30px;
  padding-left: 30px;
`

export const HederTitle = styled.h1`
  text-align: left;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 0px;
  color: #131313;
`

export const AddButton = styled.button`
  width: 110px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  background: #cef9c6 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #1d201c;
`
export const Links = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: #131313;
  padding-right: 15px;
`

export const LinksContainer = styled.div`
padding-top: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderContainer = styled.div`
display:flex;
`

export const IconContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: ${props =>
    props.margin ? props.margin : 0}px;
`

export const TitleIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/icons/project.svg');
  background-size: cover;
`

export const ParticipantsContainer = styled.div`
  display:flex;
  flex-direction: row;
`

export const ParticipantIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../../../public/icons/user.svg);
  background-size: cover;
`
export const ParticipantQty = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #9B9B9B;
`