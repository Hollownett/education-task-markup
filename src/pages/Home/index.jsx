import React from 'react'

import { PageContainer } from '@/layouts/index'
import Navigation from '@/components/Navigation'
import { Header } from '@/components/Header'

import {
  CardContainer,
  Activity,
  IconContainer,
  CompletedTasks,
  RateContainer,
  TodayTasks,
  TodayTasksContainer,
  Task,
  TaskContainer,
  TaskText,
  TaskIcon,
  TaskContributorContainer,
  TaskContributorIcon,
  TaskContributorDepartment,
  TodayTaskContainer,
  TodayTaskHeaderContainer,
  AddButton,
  WorkingRate,
  Perfomance,
  Donut,
  WorkingRateTitle,
  WorkingRateText,
  PerformanceRateTitle,
  PerformanceRateText,
  CardTitle,
  CompletedTasksQty,
  CompletedTasksChart,
  CompletedTasksChartContainer,
  SVG,
  DonutContainer,
  ActivityContainer,
  ActionTime,
  ActionIcon,
  ActionText,
  ActionContainer,
  ItemContainer,
  Day,
} from './components'

export default () => {
  return (
    <React.Fragment>
      <Navigation />
      <PageContainer>
        <Header headerTitle="Home" />
        <CardContainer>
          <TaskContainer>
            <CompletedTasks>
              <CardTitle>Completed Tasks</CardTitle>
              <CompletedTasksChartContainer>
                <CompletedTasksQty>372</CompletedTasksQty>
                <IconContainer width={380} height={164}>
                  <CompletedTasksChart />
                </IconContainer>
              </CompletedTasksChartContainer>
            </CompletedTasks>
            <RateContainer>
              <WorkingRate>
                <WorkingRateTitle>
                  Working Rate
                </WorkingRateTitle>
                <DonutContainer>
                  <WorkingRateText>62%</WorkingRateText>
                  <SVG
                    width="170"
                    height="170"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <circle
                        r="69.85699"
                        cy="81"
                        cx="81"
                        stroke-width="10"
                        stroke="#f2f2f2"
                        fill="none"
                      />
                      <Donut
                        r="69.85699"
                        cy="81"
                        cx="81"
                        stroke-width="10"
                        stroke="#7EB973"
                        fill="none"
                        style={{
                          strokeDashoffset: 160 /* 220 of 440 */,
                          strokeWidth: 10,
                        }}
                      />
                    </g>
                  </SVG>
                </DonutContainer>
              </WorkingRate>
              <Perfomance>
                <PerformanceRateTitle>
                  Performance
                </PerformanceRateTitle>
                <DonutContainer>
                  <PerformanceRateText>
                    47%
                  </PerformanceRateText>
                  <SVG
                    width="170 "
                    height="170"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <circle
                        r="69.85699"
                        cy="81"
                        cx="81"
                        stroke-width="10"
                        stroke="#f2f2f2"
                        fill="none"
                      />
                      <Donut
                        r="69.85699"
                        cy="81"
                        cx="81"
                        stroke-width="10"
                        stroke="#764CED"
                        fill="none"
                        style={{
                          strokeDashoffset: 160 /* 220 of 440 */,
                          strokeWidth: 10,
                        }}
                      />
                    </g>
                  </SVG>
                </DonutContainer>
              </Perfomance>
            </RateContainer>
            <TodayTasks>
              <TodayTasksContainer>
                <TodayTaskHeaderContainer>
                  <CardTitle>Today Tasks</CardTitle>
                  <AddButton>+ Add Task</AddButton>
                </TodayTaskHeaderContainer>
                <TodayTaskContainer>
                  <IconContainer
                    width={30}
                    height={30}
                    margin={20}>
                    <TaskIcon />
                  </IconContainer>
                  <Task>
                    <TaskText>
                      E-mail after registration so that I
                      can confirm my address
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
                  <IconContainer
                    width={30}
                    height={30}
                    margin={20}>
                    <TaskIcon />
                  </IconContainer>
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
          </TaskContainer>
          <Activity>
            <CardTitle>Activity</CardTitle>
            <Day>TODAY</Day>
            <ActivityContainer>
              <ItemContainer>
                <IconContainer
                  width={50}
                  height={40}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Darika Samak mark as done Listing on
                    Product Hunt
                  </ActionText>
                  <ActionTime>8:40 PM</ActionTime>
                </ActionContainer>
              </ItemContainer>
              <ItemContainer>
                <IconContainer
                  width={50}
                  height={40}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Emilee Simchenko commented on Account
                    for teams and personal in bottom style
                  </ActionText>
                  <ActionTime>7:32 PM</ActionTime>
                </ActionContainer>
              </ItemContainer>
            </ActivityContainer>
            <Day>YESTERDAY</Day>
            <ActivityContainer>
              <ItemContainer>
                <IconContainer
                  width={50}
                  height={40}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Darika Samak mark as done Listing on
                    Product Hunt so that we can reach as
                    many potential users
                  </ActionText>
                  <ActionTime>5:49 PM</ActionTime>
                </ActionContainer>
              </ItemContainer>
              <ItemContainer>
                <IconContainer
                  width={50}
                  height={40}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Darika Samak edited Listing on Product
                    Hunt so that we can reach as many
                    potential users
                  </ActionText>
                  <ActionTime>5:40 PM</ActionTime>
                </ActionContainer>
              </ItemContainer>
            </ActivityContainer>
          </Activity>
        </CardContainer>
      </PageContainer>
    </React.Fragment>
  )
}
