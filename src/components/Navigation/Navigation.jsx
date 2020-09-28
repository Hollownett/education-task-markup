import React from 'react'
import {
  NavigationContainer,
  TopContainer,
  IconContainer,
  Title,
  SearchIcon,
  CheckListIcon,
  UserInfo,
  UserPic,
  userNameContainer,
  UserName,
  UserRole,
  MoreIcon,
  TasksContainer,
  CompletedTasks,
  OpenTasks,
  Task,
  TaskQty,
  MenuContainer,
  MenuTitle,
  MenuItemContainer,
  MenuItem,
  MenuItemIcon,
  AddProjectButton,
  InviteContainer,
  Invite,
  InviteLink,
  Links,
} from './components'

function Navigation() {
  return (
    <NavigationContainer>
      <TopContainer>
        <IconContainer width={22} height={20}>
          <CheckListIcon />
        </IconContainer>
        <Title>PROJECTUS</Title>
        <IconContainer width={16} height={16} margin={70}>
          <SearchIcon />
        </IconContainer>
      </TopContainer>
      <UserInfo>
        <IconContainer width={48} height={48}>
          <UserPic />
        </IconContainer>
        <userNameContainer>
          <UserName>
            <Links exact to="/profile">
              Mary Petrova
            </Links>
          </UserName>
          <UserRole>Project Manager</UserRole>
        </userNameContainer>
        <IconContainer width={20} height={20} margin={30}>
          <MoreIcon />
        </IconContainer>
      </UserInfo>
      <TasksContainer>
        <CompletedTasks>
          <TaskQty>129</TaskQty>
          <Task>Completed Tasks</Task>
        </CompletedTasks>
        <OpenTasks>
          <TaskQty>24</TaskQty>
          <Task>Open Tasks</Task>
        </OpenTasks>
      </TasksContainer>
      <MenuContainer>
        <MenuTitle>MENU</MenuTitle>
        <MenuItem>
          <Links exact to="/home">
            Home
          </Links>
        </MenuItem>
        <MenuItem>
          <Links exact to="">
            My Tasks
          </Links>
        </MenuItem>
        <MenuItem>
          <Links exact to="">
            Notifications
          </Links>
        </MenuItem>
      </MenuContainer>
      <MenuContainer>
        <MenuTitle>PROJECTS</MenuTitle>
        <MenuItem>
          <MenuItemContainer>
            <IconContainer width={20} height={20}>
              <MenuItemIcon />
            </IconContainer>
            <Links exact to="">
              Dashboard UI Kit
            </Links>
          </MenuItemContainer>
        </MenuItem>
        <MenuItem>
          <MenuItemContainer>
            <IconContainer width={20} height={20}>
              <MenuItemIcon />
            </IconContainer>
            <Links exact to="">
              CRM System
            </Links>
          </MenuItemContainer>
        </MenuItem>
        <MenuItem>
          <MenuItemContainer>
            <IconContainer width={20} height={20}>
              <MenuItemIcon />
            </IconContainer>
            <Links exact to="/boards">
              Website Redesign
            </Links>
          </MenuItemContainer>
        </MenuItem>
        <MenuItem>
          <MenuItemContainer>
            <IconContainer width={20} height={20}>
              <MenuItemIcon />
            </IconContainer>
            <Links exact to="/">
              Communication Tool
            </Links>
          </MenuItemContainer>
        </MenuItem>
        <AddProjectButton>+ Add a Project</AddProjectButton>
      </MenuContainer>
      <InviteContainer>
        <InviteLink>Invite your teammate</InviteLink>
        <Invite>and start collaborating!</Invite>
      </InviteContainer>
    </NavigationContainer>
  )
}

export default Navigation
