import styled from "styled-components";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { PageHeader } from "../../components/Headers/PageHeader";
import { useSearchParams } from "react-router-dom";
import { QADashboard } from "./QADashboard/QADashboard";
import { MyAssignedQATasks } from "./MyAssignedQATasks/MyAssignedQATasks";
import { QAHistory } from "./QAHistory/QAHistory";
import { TabBody } from "../../components/UI/Tabs/OwnTabs";
import EventsAndTasks from "../../components/EventTaskComponents/EventsAndTasks";

const qaTabs = [
  { label: "QA Dashboard" },
  { label: "Assigned QA Tasks" },
  { label: "History" },
];

const QAPage = () => {
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
          tabs={qaTabs}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        >
          QA
        </PageHeader>

        <TabBody value={0} selectedTab={selectedTab}>
          <QADashboard />
        </TabBody>

        <TabBody value={1} selectedTab={selectedTab}>
          {/* <MyAssignedQATasks /> */}
          <EventsAndTasks isQa />
        </TabBody>

        <TabBody value={2} selectedTab={selectedTab}>
          <QAHistory />
        </TabBody>
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

export default QAPage;
