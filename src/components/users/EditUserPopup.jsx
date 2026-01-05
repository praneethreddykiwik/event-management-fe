import styled from "styled-components";
import PopupModal from "../PopupModal/PopupModal";
import { Button } from "../Buttons/Button";
import {
  fetchManagersAction,
  registrationAction,
} from "../../redux/users/users.actions";
import { useDispatch } from "react-redux";
import RegistrationForm from "../../Forms/RegistrationForm";

const EditUserPopup = ({ onClose, title, subtitle }) => {
  const dispatch = useDispatch();

  const onCreateUser = async (payload) => {
    await dispatch(registrationAction(payload));
    await dispatch(fetchManagersAction());
  };

  return (
    <PopupModal title={title} subtitle={subtitle} onClose={onClose} width="30%">
      <StyledGap />
      <RegistrationForm onCreateUser={onCreateUser} />

      <StyledCMActions>
        <Button type="secondary" onClick={onClose}>
          Cancel
        </Button>
      </StyledCMActions>
    </PopupModal>
  );
};

export default EditUserPopup;

const StyledGap = styled.div`
  height: 28px;
`;

const StyledCMActions = styled.div`
  margin-top: 20px;
`;
