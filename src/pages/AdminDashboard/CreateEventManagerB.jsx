/** @format */

import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button';

const CreateEventManagerB = () => {
  return (
    <CreateEventButtons>
      <CreateButton>
        <Button type="icon" icon="add">
          Create Event
        </Button>
      </CreateButton>
      <ManageButton>
        <Button type="icon" icon="group">
          Manage Event Managers
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
