import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 143px;
  margin-bottom: 20px;
`

export const FormContainer = styled.ul`
  width: 505px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  align-items: center;
  list-style-type: none;
  padding: 80px 20px 80px 20px;
  li {
    display: flex;
    flex-direction: column;
  }

`
export const FormTitle = styled.h1``

export const Input = styled.input`
  width: 445px;
  height: 50px;
  font-size: 18px;
  background: #eaeaea 0% 0% no-repeat padding-box;
  outline: none;
  border-color: transparent;
  border-radius: 8px;
  padding: 20px 13px;
  margin-bottom: 20px;
  &::hover{
    outline: none;
    box-shadow: none;
  }
`

export const SibmitButton = styled.button`
  width: 255px;
  height: 50px;
  font-size: 14px;
  background: #cef9c6 0% 0% no-repeat padding-box;
  border-radius: 25px;
  text-align: center;
  color: #1d201c;
  margin-top: 25px;
`

export const HoeizontalLine = styled.hr`
  width: 445px;
  margin-top: 50px;
  border-color: #eaeaea;
  margin-bottom: 30px;
`
