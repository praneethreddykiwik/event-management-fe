import styled from "styled-components";
import PopupModal from "../../components/PopupModal/PopupModal";
import { Button } from "../../components/Buttons/Button";
import {
  updateUserAction,
  registrationAction,
  fetchAllUsersAction,
} from "../../redux/users/users.actions";
import { useDispatch } from "react-redux";
import RegistrationForm from "../../Forms/RegistrationForm";

const EditUserPopup2 = ({ onClose, modalDetails, selectedRole }) => {
  const dispatch = useDispatch();

  const onCreateUser = async (payload) => {
    if (modalDetails.type === "edit") {
      const dat = { ...payload.reqPayload, uid: modalDetails.userUid };
      await dispatch(updateUserAction(dat));
    } else {
      await dispatch(registrationAction(payload));
    }
    await dispatch(fetchAllUsersAction({ query: selectedRole }));
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

export default EditUserPopup2;

const StyledGap = styled.div`
  height: 32px;
`;

const StyledCMActions = styled.div`
  margin-top: 16px;
`;
