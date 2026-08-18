import styled from "styled-components";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { PageHeader } from "../../components/Headers/PageHeader";
import EventsAndTasks from "./AssignedTasks/EventsAndTasks";
import { useSearchParams } from "react-router-dom";
import { TabBody } from "../../components/UI/Tabs/OwnTabs";
import { TaskDashboard } from "./TaskDashboard/TaskDashboard";
import { TaskHistory } from "./TaskHistory/TaskHistory";

const taskTabs = [
  { label: "Task Dashboard" },
  { label: "Assigned Tasks" },
  { label: "Task History" },
];

const Tasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTabChange = (val) => {
    setSearchParams(
      { tab: val, tenantId: searchParams.get("tenantId") },
      { replace: true },
    );
  };

  const selectedTab = searchParams.get("tab");

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <PageHeader
          isTitle
          tabs={taskTabs}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        >
          Tasks
        </PageHeader>

        <TabBody value={0} selectedTab={selectedTab}>
          <TaskDashboard />
        </TabBody>

        <TabBody value={1} selectedTab={selectedTab}>
          <EventsAndTasks />
        </TabBody>

        <TabBody value={2} selectedTab={selectedTab}>
          <TaskHistory />
        </TabBody>
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

export default Tasks;
