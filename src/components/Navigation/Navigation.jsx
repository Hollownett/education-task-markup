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
  Humburger,
  menuToggle,
} from './components'

function Navigation() {
  return (
    <NavigationContainer className="Navigation">
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
        <Links exact to="/home">
          <MenuItem>Home</MenuItem>
        </Links>
        <Links exact to="">
          <MenuItem>My Tasks</MenuItem>
        </Links>
        <Links exact to="">
          <MenuItem>Notifications</MenuItem>
        </Links>
      </MenuContainer>
      <MenuContainer>
        <MenuTitle>PROJECTS</MenuTitle>
        <Links exact to="">
          <MenuItem>
            <MenuItemContainer>
              <IconContainer width={20} height={20}>
                <MenuItemIcon />
              </IconContainer>
              Dashboard UI Kit
            </MenuItemContainer>
          </MenuItem>
        </Links>
        <Links exact to="">
          <MenuItem>
            <MenuItemContainer>
              <IconContainer width={20} height={20}>
                <MenuItemIcon />
              </IconContainer>
              CRM System
            </MenuItemContainer>
          </MenuItem>
        </Links>
        <Links exact to="/boards">
          <MenuItem>
            <MenuItemContainer>
              <IconContainer width={20} height={20}>
                <MenuItemIcon />
              </IconContainer>
              Website Redesign
            </MenuItemContainer>
          </MenuItem>
        </Links>
        <Links exact to="/">
          <MenuItem>
            <MenuItemContainer>
              <IconContainer width={20} height={20}>
                <MenuItemIcon />
              </IconContainer>
              Communication Tool
            </MenuItemContainer>
          </MenuItem>
        </Links>
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
