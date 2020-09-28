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
`

export const Activity = styled.div`
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  padding: 30px;
`

export const ActivityTitle = styled.h2``

export const Day = styled.p`
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #131313;
  opacity: 0.5;
  margin-top: 30px;
`

export const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ActionIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../../../public/icons/message.svg);
  background-size: cover;
`

export const ActionTime = styled.div`
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #131313;
  opacity: 0.7;
  margin-left: 45%;
`
export const ActionText = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #131313;
`

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ItemContainer = styled.div`
  display: flex;
  padding-top: 20px;
`

export const CommentContainer = styled.div`
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 30%;
`
export const CommentText = styled.p`
  width: 50%;
  text-align: left;
  font-size: 15px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #131313;
`
export const CommentIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../../../public/icons/user.svg);
  background-size: cover;
`