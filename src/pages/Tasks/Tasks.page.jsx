import styled from "styled-components";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { PageHeader } from "../../components/Headers/PageHeader";
import EventsAndTasks from "../../components/EventTaskComponents/EventsAndTasks";

const Tasks = () => {
  return (
    <BlueBackHOC>
      <DashboardContainer>
        <PageHeader isTitle>Tasks</PageHeader>
        <EventsAndTasks />
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

export default Tasks;
