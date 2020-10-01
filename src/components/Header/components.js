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
  @media (max-width: 360px) {
    padding-left: 5px;
  }
  @media (max-width: 880px) {
    height: fit-content;
  }
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
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
    padding-right: 5px;
  }
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
    padding-right: 5px;
  }
  @media (max-width: 880px) {
    padding-right: 10px;
  }
`

export const LinksContainer = styled.div`
  padding-top: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 880px) {
    padding-left: 20px;
  }
  @media (max-width: 630px) {
    ${IconContainer} {
      width: 0px;
      height: fit-content;
    }
  }
  @media (max-width: 360px) {
    padding-left: 50px;
  }
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
  display: flex;
  flex-direction: row;
  @media (max-width: 505px) {
    flex-direction: column;
    align-items: center;
  }
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
  color: #9b9b9b;
  @media (max-width: 505px) {
    font-size: 10px;
  }
`
