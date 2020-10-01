import styled from 'styled-components'

export const IconContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: ${props =>
    props.margin ? props.margin : 0}px;
`

export const CardTitle = styled.p`
  text-align: left;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #131313;
`
export const CardContainer = styled.div`
  width: 95%;
  display: flex;
  margin: 30px;
  @media (max-width: 1200px) {
    display: block;
    margin: 10px;
  }
`

export const TodayTasks = styled.div`
  width: 33%;
  height: fit-content;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px 8px 0px 0px;
  margin-right: 30px;
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
    margin-right: 0px;
    margin-top: 30px;
  }
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
    margin-right: 0px;
    margin-top: 30px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    margin-right: 0px;
    margin-top: 30px;
  }
`
export const TodayTasksContainer = styled.div`
  padding: 30px;
`

export const TodayTaskContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  background: 0% 0% no-repeat padding-box padding-box
    #f7f6f3;
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px;
`
export const TaskIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/icons/checked-box.svg');
  background-size: cover;
`
export const Task = styled.div`
  display: flex;
  flex-direction: column;
`
export const TaskText = styled.p`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #131313;
`
export const TaskContributorContainer = styled.div`
  display: flex;
  margin-top: 15px;
`
export const TaskContributorIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(../../../public/icons/user.svg);
  background-size: cover;
`

export const TaskContributorDepartment = styled.p`
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #ed6400;
`
export const TodayTaskHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AddButton = styled.button`
  width: 110px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  background: #cef9c6 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #1d201c;
`
