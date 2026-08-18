import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import { PageHeader } from "../../components/Headers/PageHeader";
import { TabBody } from "../../components/UI/Tabs/OwnTabs";
import AssignedRoles from "./AssignedUserRoles/AssignedUserRoles";
import AssignedUserRoles from "./AssignedUserRoles/AssignedUserRoles";
import { UserManagementDashboard } from "./UserManagementDashboard/UserManagementDashboard";
// import UserManagement from "../UserManagement";

const userManagementTabs = [
  { label: "User Management" },
  { label: "Assigned  UserRoles" },
  { label: "History" },
];

const UserManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTabChange = (val) => {
    setSearchParams(
      {
        tab: val,
        tenantId: searchParams.get("tenantId"),
      },
      { replace: true },
    );
  };
  const selectedTab = searchParams.get("tab");

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <PageHeader
          isTitle
          tabs={userManagementTabs}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        >
          User Management
        </PageHeader>

        <TabBody value={0} selectedTab={selectedTab}>
          <UserManagementDashboard />
        </TabBody>

        <TabBody value={1} selectedTab={selectedTab}>
          <AssignedUserRoles />
        </TabBody>

        <TabBody value={2} selectedTab={selectedTab}>
          <UserManagementHistory />
        </TabBody>
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const UserManagementHistory = () => {
  return <div>User Management History</div>;
};

const DashboardContainer = styled.div`
  padding: 0 16px 16px 16px;
`;

export default UserManagementPage;
