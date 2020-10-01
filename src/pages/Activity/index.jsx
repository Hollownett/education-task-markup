import React from 'react'

import { PageContainer } from '@/layouts/index'
import Navigation from '@/components/Navigation'
import { ProjectHeader } from '@/components/Header'

import {
  IconContainer,
  CardContainer,
  Activity,
  ActionContainer,
  Day,
  ActivityContainer,
  ItemContainer,
  ActionIcon,
  ActionText,
  ActionTime,
  CommentContainer,
  CommentIcon,
  CommentText,
} from './components'

export default () => {
  return (
    <React.Fragment>
      <Navigation />
      <PageContainer>
        <ProjectHeader headerTitle="Website Redesign" />
        <CardContainer>
          <Activity>
            <Day>TODAY</Day>
            <ActivityContainer>
              <ItemContainer>
                <IconContainer
                  width={60}
                  height={45}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Darika Samak mark as done Listing on
                    Product Hunt
                  </ActionText>
                </ActionContainer>
                <ActionTime>8:40 PM</ActionTime>
              </ItemContainer>
              <ItemContainer>
                <IconContainer
                  width={60}
                  height={45}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Emilee Simchenko commented on Account
                    for teams and personal in bottom style
                  </ActionText>
                </ActionContainer>
                <ActionTime>7:32 PM</ActionTime>
              </ItemContainer>
            </ActivityContainer>
            <CommentContainer>
              <IconContainer
                width={48}
                height={48}
                margin={15}>
                <CommentIcon />
              </IconContainer>
              <CommentText>
                During a project build, it is necessary to
                evaluate the product design and development
                against project requirements and outcomes
              </CommentText>
            </CommentContainer>
            <Day>YESTERDAY</Day>
            <ActivityContainer>
              <ItemContainer>
                <IconContainer
                  width={60}
                  height={45}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Darika Samak mark as done Listing on
                    Product Hunt so that we can reach as
                    many potential users
                  </ActionText>
                </ActionContainer>
                <ActionTime>5:49 PM</ActionTime>
              </ItemContainer>
              <ItemContainer>
                <IconContainer
                  width={60}
                  height={45}
                  margin={20}>
                  <ActionIcon />
                </IconContainer>
                <ActionContainer>
                  <ActionText>
                    Darika Samak edited Listing on Product
                    Hunt so that we can reach as many
                    potential users
                  </ActionText>
                </ActionContainer>
                <ActionTime>5:40 PM</ActionTime>
              </ItemContainer>
            </ActivityContainer>
          </Activity>
        </CardContainer>
      </PageContainer>
    </React.Fragment>
  )
}
