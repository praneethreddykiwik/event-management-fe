import styled from "styled-components";
import PopupModal from "../../../components/PopupModal/PopupModal";

const CreateManager = ({ onClose }) => {
  return (
    <StyledCreateLayout
      title="Add Event Manager"
      subtitle="Fill in the details to add a new event manager"
      onClose={onClose}
      width="40%"
    ></StyledCreateLayout>
  );
};

const StyledCreateLayout = styled(PopupModal)``;

export default CreateManager;
