import React from 'react'

import { PageContainer } from '@/layouts/index'
import Navigation from '@/components/Navigation'
import { ProfileHeader } from '@/components/Header'

import {
  IconContainer,
  CardContainer,
  Form,
  FormContainer,
  UserPic,
  Input,
  SibmitButton,
  Bio,
  CancelButton,
} from './components'

export default () => {
  return (
    <React.Fragment>
      <Navigation />
      <PageContainer>
        <ProfileHeader headerTitle="Profile Settings" />
        <CardContainer>
          <Form>
            <FormContainer>
              <IconContainer width={120} height={120}>
                <UserPic />
              </IconContainer>
              <li>
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" id="name" />
              </li>
              <li>
                <label htmlFor="role">Role</label>
                <Input type="text" name="role" id="role" />
              </li>
              <li>
                <label htmlFor="bio">About</label>
                <Bio
                  type="text"
                  name="bio"
                  id="bio"
                  label="Something about yourself"
                />
              </li>
              <li>
                <SibmitButton type="submit">
                  Update Profile
                </SibmitButton>
              </li>
              <li>
                <CancelButton type="submit">
                  Cancel
                </CancelButton>
              </li>
            </FormContainer>
          </Form>
        </CardContainer>
      </PageContainer>
    </React.Fragment>
  )
}
