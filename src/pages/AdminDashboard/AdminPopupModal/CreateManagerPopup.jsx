import styled from "styled-components";
import PopupModal from "../../../components/PopupModal/PopupModal";
import { StyledParagraphSmall } from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";
import { CREATE_MANGER } from "../../../enum/common";
import RegistrationForm from "../../RegistrationPage/RegistrationForm";
import {
  fetchManagersAction,
  registrationAction,
} from "../../../redux/users/users.actions";
import { useDispatch } from "react-redux";

const CreateManagerPopup = ({ onClose }) => {
  const dispatch = useDispatch();

  const onCreateUser = async (payload) => {
    await dispatch(registrationAction(payload));
    await dispatch(fetchManagersAction());
  };

  return (
    <PopupModal
      title={CREATE_MANGER.CREATE_MANAGER_TITLE}
      subtitle={CREATE_MANGER.CREATE_MANGER_SUBTITLE}
      onClose={onClose}
      width="30%"
    >
      <RegistrationForm onCreateUser={onCreateUser} />

      <StyledCMActions>
        <Button type="secondary" onClick={onClose}>
          Cancel
        </Button>
      </StyledCMActions>
    </PopupModal>
  );
};

export default CreateManagerPopup;

const StyledCMForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 10px;
`;

const StyledCMRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const StyledCMField = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCMLabel = styled(StyledParagraphSmall)`
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  margin: 5px;
`;

const StyledCMActions = styled.div`
  margin-top: 20px;
`;
