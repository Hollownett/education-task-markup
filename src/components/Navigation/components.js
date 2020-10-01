import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { PageContainer } from '@/layouts'

export const NavigationContainer = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  background: #000000 0% 0% no-repeat padding-box;

  @media (max-width: 876px) {
    position: absolute;
    z-index: 1;
    transform: ${({ open }) =>
      open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`

export const IconContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-left: ${props =>
    props.margin ? props.margin : 0}px;
  margin-right: 10px;
`
export const TopContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px;
  @media (max-width: 876px) {
    ${IconContainer} {
      display: none;
    }
  }
`

export const SearchIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/icons/search.svg');
  background-size: cover;
`

export const Title = styled.div`
  font-size: 16px;
  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;
  padding-left: 13px;
  @media (max-width: 876px) {
    padding-left: 43px;
  }
`

export const CheckListIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/icons/chekedList.svg');
  background-size: cover;
`

export const UserInfo = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #202020 0% 0% no-repeat padding-box;
  padding-left: 25px;
  padding-right: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const UserPic = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../../../public/icons/user.svg);
  background-size: cover;
`
export const userNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`

export const UserName = styled.p`
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #ffffff;
`
export const UserRole = styled.p`
  text-align: left;
  font-size: 12px
  letter-spacing: 0px;
  color: #9b9b9b;
`

export const MoreIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/icons/more.svg');
  background-size: cover;
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  margin-right: 63px;
  margin-bottom: 30px;
`

export const CompletedTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`
export const OpenTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-left: 20px;
`
export const Task = styled.p`
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #9b9b9b;
`
export const TaskQty = styled.p`
  text-align: left;
  font-size: 14px
  font-weight: bold;
  letter-spacing: 0px;
  color: #ffffff;
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
`
export const MenuTitle = styled.div`
  text-align: left;
  font-size: 12px;
  color: #878787;
  margin-bottom: 20px;
  padding-left: 30px;
`
export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  position: absolute;
`
export const MenuItem = styled.button`
  width: 100%;
  height: 40px;
  text-align: left;
  font-size: 14px;
  border: none;
  background: none;
  padding-left: 30px;
  color: #ffffff;
  :hover {
    border-left-color: #ffc200;
    border-left-width: 5px;
    border-left-style: solid;
    background: #202020 0% 0% no-repeat padding-box;

    &:after {
      content: '....';
      text-align: right;
      color: transparent;
      width: 100%;
      height: 100%;
      background-image: url('../../../public/icons/more.svg');
      background-size: cover;
      position: sticky;
      left: 225px;
    }
  }
`

export const MenuItemIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/icons/project.svg');
  background-size: cover;
`

export const AddProjectButton = styled.button`
  text-align: left;
  font-size: 14px
  letter-spacing: 0px;
  background: transparent;
  border: none;
  color: #ffc200;
  margin-top: 20px;
  padding-left: 30px;
`

export const InviteContainer = styled.div`
  margin-left: 30px;
  margin-top: 153%;
`

export const Invite = styled.p`
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #ffffff;
`

export const InviteLink = styled.a`
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #ffc200;
`
export const Links = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
`
// Burger  button for mobile

export const StyledBurger = styled.button`
  position: absolute;
  top: 25px;
  left: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? '#ffffff' : '#000000'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) =>
        open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media (max-width: 876px) {
    display: flex;
  }
`
