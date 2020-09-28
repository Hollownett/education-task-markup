import React from 'react'
import {
  Form,
  FormContainer,
  Input,
  SibmitButton,
  HoeizontalLine,
  FormTitle,
} from './components'

export default () => {
  return (
    <Form>
      <FormContainer>
        <li>
          <FormTitle>Sign In</FormTitle>
        </li>
        <li>
          <SibmitButton>Use Google Account</SibmitButton>
        </li>
        <li>
          <HoeizontalLine />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email" />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password" />
        </li>
        <li>
          <SibmitButton type="submit">
            Sign In
          </SibmitButton>
        </li>
      </FormContainer>
    </Form>
  )
}
