import styled from 'styled-components'

export const IconContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: ${props =>
    props.margin ? props.margin : 0}px;
`

export const CardContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  @media (max-width: 830px) {
    margin-top: 30px;
    margin-left: 10px;
  }
`
export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = styled.ul`
  width: 730px;
  height: 796px;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  align-items: center;
  list-style-type: none;
  padding-top: 40px;
  li {
    display: flex;
    flex-direction: column;
  }
  li > label {
    margin-top: 30px;
  }

  @media (max-width: 830px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 540px;
  height: 50px;
  font-size: 18px;
  background: #eaeaea 0% 0% no-repeat padding-box;
  outline: none;
  border-color: transparent;
  border-radius: 8px;
  padding: 20px 13px;
  margin-bottom: 20px;
  &::hover {
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 830px) {
    width: 340px;
  }
  @media (max-width: 360px) {
    width: 100%;
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
  margin-top: 120px;
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
  }
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
  }
`
export const CancelButton = styled.button`
  height: 21px;
  font-size: 14px;
  background: transparent;
  border: none;
  text-align: center;
  color: #1d201c;
  margin-top: 20px;
`

export const Bio = styled.input`
  width: 540px;
  height: 120px;
  font-size: 18px;
  outline: none;
  background: #eaeaea 0% 0% no-repeat padding-box;
  border-color: transparent;
  border-radius: 8px;
  padding: 20px 13px;
  &::hover {
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 830px) {
    width: 340px;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`
export const UserPic = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../../../public/icons/user.svg);
  background-size: cover;
`
