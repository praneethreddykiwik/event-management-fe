import styled from "styled-components";
import PopupModal from "../../components/PopupModal/PopupModal";
import { Button } from "../../components/Buttons/Button";
import {
  updateUserAction,
  fetchManagersAction,
  registrationAction,
  fetchAllUsersAction,
} from "../../redux/users/users.actions";
import { useDispatch } from "react-redux";
import RegistrationForm from "../../Forms/RegistrationForm";

const EditUserPopup = ({ onClose, modalDetails }) => {
  const dispatch = useDispatch();

  const onCreateUser = async (payload) => {
    if (modalDetails.type === "edit") {
      const dat = { ...payload.reqPayload, uid: modalDetails.userUid };
      await dispatch(updateUserAction(dat));
    } else {
      await dispatch(registrationAction(payload));
    }
    await dispatch(fetchAllUsersAction());
    onClose();
  };


  return (
    <PopupModal
      title={modalDetails.title}
      subtitle={modalDetails.subtitle}
      onClose={onClose}
      width="560px"
    >
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
