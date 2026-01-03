/** @format */

import { useState } from 'react';
import styled from 'styled-components';

import { eventFormConfig } from './eventFormConfig';

import { Input } from '../../components/Inputs/Input';
import RoleDropdown from '../../components/RoleDropdown/RoleDropdown';
import { Button } from '../../components/Buttons/Button';

import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from '../../components/Styled/Typography.styled';
import { ADMIN_COMMON } from '../../Enum/Admin.common';

const CreateEventModal = ({ onClose }) => {
  const [form, setForm] = useState({});

  const handleInputChange = (name) => (e) => {
    let value = e;
    if (e && typeof e === 'object' && 'value' in e && !e.target) {
      value = e.value;
    }
    if (e?.target) {
      value = e.target.value;
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    console.log('EVENT CREATED:', form);
    onClose();
  };

  const renderField = (field) => {
    if (field.component === 'select') {
      return (
        <Field key={field.name}>
          <RoleDropdown
            label={field.label}
            options={field.options}
            value={form[field.name] || null}
            placeholder={field.label}
            onChange={(opt) =>
              setForm((prev) => ({ ...prev, [field.name]: opt }))
            }
          />
        </Field>
      );
    }

    if (field.component === 'textarea') {
      return (
        <Field key={field.name}>
          <LabelTxt>{field.label}</LabelTxt>

          <Input
            type="textarea"
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name] || ''}
            onChange={handleInputChange(field.name)}
          />
        </Field>
      );
    }

    return (
      <Field key={field.name}>
        <LabelTxt>{field.label}</LabelTxt>

        <Input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={form[field.name] || ''}
          onChange={handleInputChange(field.name)}
        />
      </Field>
    );
  };

  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Top>
          <CreateEventTxt>{ADMIN_COMMON.EVENT_TXT}</CreateEventTxt>
          <CreateEventS>{ADMIN_COMMON.EVENT_TXT_SMALL} </CreateEventS>
        </Top>

        <Form>
          {eventFormConfig.map((field) =>
            field.group === 'row' ? (
              <Row key={field.fields.map((f) => f.name).join('-')}>
                {field.fields.map(renderField)}
              </Row>
            ) : (
              renderField(field)
            )
          )}
        </Form>

        <Actions>
          <CreateB>
            <Button onClick={handleCreate}>{ADMIN_COMMON.CREATE_BUTTON}</Button>
          </CreateB>

          <CancelB>
            <Button onClick={onClose}>{ADMIN_COMMON.CANCEL_BUTTON}</Button>
          </CancelB>
        </Actions>
      </Box>
    </Overlay>
  );
};

export default CreateEventModal;

const LabelTxt = styled(StyledParagraphSmall)`
  text-align: left;
  padding-left: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  margin: 0px auto;
  padding: 20px;
`;

const Box = styled.div`
  width: min(600px, 95vw);
  max-height: 90vh;
  overflow-y: auto;
  background: white;
  border-radius: 16px;
  padding: 22px 26px;
  scrollbar-width: thin;
`;
const CreateEventTxt = styled(StyledMediumHeading)`
  margin: 4px 0 0;
`;

const CreateEventS = styled(StyledParagraphSmall)``;

const Top = styled.div`
  margin-bottom: 12px;
  justify-items: left;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Actions = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-top: 35px;
`;

const CancelB = styled.div`
  button {
    background-color: #eeeeee;
    color: #000000;
  }
`;

const CreateB = styled.div`
  button {
    color: white;
  }
`;
