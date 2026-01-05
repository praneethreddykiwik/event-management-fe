import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";
import { ADMIN_COMMON } from "../../Enum/Admin.common";

const CreateEventManagerB = ({ onCreateEvent, setOpenManagersPopup }) => {
  const onClickTaskMonitor = () => {
    setOpenManagersPopup(true);
  };

  return (
    <CreateEventButtons>
      <CreateButton>
        <Button type="icon" icon="add" onClick={onCreateEvent}>
          {ADMIN_COMMON.CREATE_BUTTON}
        </Button>
      </CreateButton>

      <ManageButton>
        <Button onClick={onClickTaskMonitor} type="icon" icon="group">
          {ADMIN_COMMON.MANAGE_BUTTON}
        </Button>
      </ManageButton>
    </CreateEventButtons>
  );
};
const CreateEventButtons = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 10px;
`;

const CreateButton = styled.div`
  button {
    span {
      font-size: 15px;
    }
  }
`;
const ManageButton = styled.div`
  button {
    background-color: #eeeeee;
    color: #000000;
  }
`;
export default CreateEventManagerB;
