import { useState } from "react";
import styled from "styled-components";
import PopupModal from "../../../components/PopupModal/PopupModal";

import { Input } from "../../../components/Inputs/Input";
import { StyledParagraphSmall } from "../../../components/Styled/Typography.styled";
import { Button } from "../../../components/Buttons/Button";
import { CREATE_MANGER } from "../../../enum/common";

const CreateManager = ({ onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    emergencyName: "",
    emergencyPhone: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";

    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";

    if (!form.address.trim()) newErrors.address = "Address is required";

    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (!validateForm()) {
      console.log("Form has errors, please fix them");
      return;
    }
    onClose();
  };

  return (
    <PopupModal
      title={CREATE_MANGER.CREATE_MANAGER_TITLE}
      subtitle={CREATE_MANGER.CREATE_MANGER_SUBTITLE}
      onClose={onClose}
      width="30%"
    >
      <StyledCMForm>
        <StyledCMField>
          <StyledCMRow>
            <StyledCMLabel>
              {CREATE_MANGER.CREATE_MANAGER_FIRSTNAME}
            </StyledCMLabel>
            <StyledCMLabel>
              {CREATE_MANGER.CREATE_MANAGER_LASTNAME}
            </StyledCMLabel>
          </StyledCMRow>
          <StyledCMRow>
            <Input
              type="text"
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
            <Input
              type="text"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
          </StyledCMRow>
        </StyledCMField>

        <StyledCMField>
          <StyledCMLabel>{CREATE_MANGER.CREATE_MANGER_EMAIL}</StyledCMLabel>
          <Input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />
        </StyledCMField>

        <StyledCMField>
          <StyledCMLabel>{CREATE_MANGER.CREATE_MANAGER_MOBILE}</StyledCMLabel>
          <Input
            type="number"
            value={form.mobile}
            onChange={handleChange("mobile")}
          />
        </StyledCMField>

        <StyledCMField>
          <StyledCMLabel>{CREATE_MANGER.CREATE_MANAGER_ADDRESS}</StyledCMLabel>
          <Input
            type="text"
            value={form.address}
            onChange={handleChange("address")}
          />
        </StyledCMField>

        <StyledCMRow>
          <StyledCMField>
            <StyledCMLabel>
              {CREATE_MANGER.CREATE_MANAGER_EMERGENCY_NAME}
            </StyledCMLabel>
            <Input
              type="text"
              value={form.emergencyName}
              onChange={handleChange("emergencyName")}
            />
          </StyledCMField>
          <StyledCMField>
            <StyledCMLabel>
              {CREATE_MANGER.CREATE_MANAGER_EMERGENCY_PHONE}
            </StyledCMLabel>
            <Input
              type="number"
              value={form.emergencyPhone}
              onChange={handleChange("emergencyPhone")}
            />
          </StyledCMField>
        </StyledCMRow>
      </StyledCMForm>

      <StyledCMActions>
        <Button type="icon" icon="add" onClick={handleCreate}>
          Add Manager
        </Button>
        <StyledCMCancelButton onClick={onClose}>Cancel</StyledCMCancelButton>
      </StyledCMActions>
    </PopupModal>
  );
};

export default CreateManager;

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
  display: flex;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`;

const StyledCMCancelButton = styled(Button)`
  background-color: #eeeeee;
  color: #000000;
  width: 20px;
`;
