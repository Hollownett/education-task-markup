import styled from 'styled-components'

export const Heading = styled.p`
  text-align: left;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0px;
  color: #131313;
`
export const IconContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: ${props =>
    props.margin ? props.margin : 0}px;
`

export const CardContainer = styled.div`
  width: 95%;
  display: flex;
  margin: 30px;
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
    display: block;
    margin: 10px;
    margin-top: 30px;
  }
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
    display: block;
    margin: 10px;
    margin-top: 30px;
  }
  @media (max-width: 830px) {
    display: block;
  }
`
export const TaskContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  row-gap: 30px;
`
export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 3%;
  @media (max-width: 360px) {
    flex-direction: column;
    margin-top: 10px;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    margin-top: 10px;
  }
`

export const CompletedTasks = styled.div`
  width: 100%;
  height: 316px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  padding: 30px;
`

export const Activity = styled.div`
  width: 40%;
  height: 95%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  padding: 30px;
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
    margin-top: 30px;
    height: fit-content;
  }
  @media only screen and (min-width: 360px) and (max-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
    margin-top: 30px;
    height: fit-content;
  }
  @media (max-width: 830px) {
    width: 100%;
    margin-top: 30px;
    height: fit-content;
  }
`
export const WorkingRate = styled.div`
  width: 100%;
  height: 296px;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  text-align: center;
`

export const Perfomance = styled.div`
  width: 100%;
  height: 296px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  text-align: center;
`

export const TodayTasks = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px 8px 0px 0px;
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
export const DonutContainer = styled.div``

export const Donut = styled.circle`
  stroke-dasharray: 440;
  -webkit-animation: donut 1s ease-out forwards;
  animation: donut 1s ease-out forwards;

  @-webkit-keyframes donut {
    from {
      stroke-dashoffset: 440;
    }
  }

  @keyframes donut {
    from {
      stroke-dashoffset: 440;
    }
  }
`
export const SVG = styled.svg`
  transform: rotate(-90deg);
`
export const WorkingRateTitle = styled.p`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 0px;
  color: #131313;
  margin-top: 30px;
`
export const WorkingRateText = styled.p`
  text-align: center;
  font-size: 46px;
  font-weight: bold;
  letter-spacing: 0px;
  color: rgb(126, 185, 115);
  position: absolute;
  line-height: 3.7;
  width: 27%;

  @media (min-width: 2560px) {
    width: 29%;
  }
  @media (max-width: 1360px) {
    width: 25%;
  }
  @media (max-width: 830px) {
    width: 43%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`

export const PerformanceRateTitle = styled.p`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 0px;
  color: #131313;
  margin-top: 30px;
  @media (max-width: 439px) {
    margin-bottom: 35px;
  }
`
export const PerformanceRateText = styled.p`
  text-align: center;
  font-size: 46px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #764ced;
  position: absolute;
  line-height: 3.7;
  width: 27%;

  @media (min-width: 2560px) {
    width: 29%;
  }
  @media (max-width: 1360px) {
    width: 25%;
  }
  @media (max-width: 830px) {
    width: 43%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`
export const CardTitle = styled.p`
  text-align: left;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #131313;
`
export const CompletedTasksQty = styled.p`
  text-align: left;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #131313;
`
export const CompletedTasksChart = styled.div`
  width: 50%;
  height: 100%;
  background-image: url('../../../public/icons/graph.svg');
  background-size: cover;
`
export const CompletedTasksChartContainer = styled.div`
  display: flex;
  flex-direction: unset;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
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
  margin-bottom: 80%;
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
