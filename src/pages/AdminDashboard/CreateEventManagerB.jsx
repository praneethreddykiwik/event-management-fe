/** @format */

import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button';
import { StyledIconButton } from '../../components/Styled/Buttons.styled';

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
    background-color: #4f46e5;
    span {
        font-size: 15px;
    }
  }
`;
const ManageButton = styled.div`
  button {
    background-color: #eeeeee;
    color: #000000;
    span {
      font-size: 15px;
    }
  }
`;
export default CreateEventManagerB;
