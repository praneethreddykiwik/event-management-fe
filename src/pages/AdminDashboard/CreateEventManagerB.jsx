/** @format */

import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button';
import AdminPopupModal from './AdminPopupModal/AdminPopupModal';
import { useState } from 'react';

const CreateEventManagerB = ({ onCreateEvent }) => {
  const [open, setOpen] = useState(false);

  const onClickTaskMonitor = () => {
    setOpen(true);
  };

  return (
    <CreateEventButtons>
      <CreateButton>
        <Button type="icon" icon="add" onClick={onCreateEvent}>
          Create Event
        </Button>
      </CreateButton>

      <ManageButton>
        <Button onClick={onClickTaskMonitor} type="icon" icon="group">
          Manage Event Managers
        </Button>
        {open && <AdminPopupModal onClose={() => setOpen(false)} />}
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
