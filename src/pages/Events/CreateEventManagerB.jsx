import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";
import * as enums from "../../enum";

const CreateEventManagerB = ({ onCreateEvent, setOpenManagersPopup }) => {
  const onClickTaskMonitor = () => {
    setOpenManagersPopup(true);
  };

  return (
    <CreateEventButtons>
      <CreateButton>
        <Button type="icon" icon="add" onClick={onCreateEvent}>
          {enums.CREATE_BUTTON}
        </Button>
      </CreateButton>

      <ManageButton>
        <Button onClick={onClickTaskMonitor} type="icon" icon="group">
          {enums.MANAGE_BUTTON}
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
