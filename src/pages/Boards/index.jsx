import React from 'react'

import { PageContainer } from '@/layouts/index'
import Navigation from '@/components/Navigation'
import { ProjectHeader } from '@/components/Header'

import {
  TodayTasks,
  TodayTasksContainer,
  TodayTaskContainer,
  TodayTaskHeaderContainer,
  Task,
  TaskText,
  AddButton,
  CardTitle,
  IconContainer,
  TaskContributorContainer,
  TaskContributorDepartment,
  TaskContributorIcon,
  CardContainer,
} from './components'

export default () => {
  return (
    <React.Fragment>
      <Navigation />
      <PageContainer>
        <ProjectHeader headerTitle="Website Redesign" />
        <CardContainer>
          <TodayTasks>
            <TodayTasksContainer>
              <TodayTaskHeaderContainer>
                <CardTitle>Backlog</CardTitle>
                <AddButton>+ Add Task</AddButton>
              </TodayTaskHeaderContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    E-mail after registration so that I can
                    confirm my address
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      DEVELOPEMENT
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    Find top 5 customers and get reviews
                    from them
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      MARKETING
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
            </TodayTasksContainer>
          </TodayTasks>
          <TodayTasks>
            <TodayTasksContainer>
              <TodayTaskHeaderContainer>
                <CardTitle>To Do</CardTitle>
                <AddButton>+ Add Task</AddButton>
              </TodayTaskHeaderContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    E-mail after registration so that I can
                    confirm my address
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      DEVELOPEMENT
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    Find top 5 customers and get reviews
                    from them
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      MARKETING
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    E-mail after registration so that I can
                    confirm my address
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      DEVELOPEMENT
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    Find top 5 customers and get reviews
                    from them
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      MARKETING
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
            </TodayTasksContainer>
          </TodayTasks>
          <TodayTasks>
            <TodayTasksContainer>
              <TodayTaskHeaderContainer>
                <CardTitle>Done</CardTitle>
                <AddButton>+ Add Task</AddButton>
              </TodayTaskHeaderContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    E-mail after registration so that I can
                    confirm my address
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      DEVELOPEMENT
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
              <TodayTaskContainer>
                <Task>
                  <TaskText>
                    Find top 5 customers and get reviews
                    from them
                  </TaskText>
                  <TaskContributorContainer>
                    <IconContainer
                      width={20}
                      height={20}
                      margin={20}>
                      <TaskContributorIcon />
                    </IconContainer>
                    <TaskContributorDepartment>
                      MARKETING
                    </TaskContributorDepartment>
                  </TaskContributorContainer>
                </Task>
              </TodayTaskContainer>
            </TodayTasksContainer>
          </TodayTasks>
        </CardContainer>
      </PageContainer>
    </React.Fragment>
  )
}
