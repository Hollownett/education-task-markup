import React from 'react'

import {
  Form,
  FormContainer,
  FormTitle,
  Input,
  SibmitButton,
  Bio,
} from './components'

export default () => {
  return (
    <Form>
      <FormContainer>
        <li>
          <FormTitle>Sign Up</FormTitle>
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" id="email" />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
          />
        </li>
        <li>
          <label htmlFor="bio">Bio</label>
          <Bio
            type="text"
            name="bio"
            id="bio"
            label="Something about yourself"
          />
        </li>
        <li>
          <SibmitButton type="submit">Sign Up</SibmitButton>
        </li>
      </FormContainer>
    </Form>
  )
}
