/** @format */

import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button';
import { Input } from '../../components/Inputs/Input';
import RoleDropdown from '../../components/RoleDropdown/RoleDropdown';
import {
  StyledMediumHeading,
  StyledParagraphSmall,
} from '../../components/Styled/Typography.styled';

const CreateEventModal = ({ onClose }) => {
  const [form, setForm] = useState({
    title: '',
    type: '',
    date: '',
    time: '',
    venue: '',
    attendees: '',
    manager: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    type: '',
    date: '',
    time: '',
    venue: '',
    attendees: '',
    manager: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.type) newErrors.type = 'Event type is required';
    if (!form.date) newErrors.date = 'Event date is required';
    if (!form.time) newErrors.time = 'Event time is required';
    if (!form.venue.trim()) newErrors.venue = 'Venue is required';

    if (!form.attendees) newErrors.attendees = 'Expected attendees required';
    else if (Number(form.attendees) <= 0)
      newErrors.attendees = 'Attendees must be greater than 0';

    if (!form.manager) newErrors.manager = 'Please assign a manager';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; 
  };
  const handleInputChange = (field) => (obj) => {
    setForm((prev) => ({ ...prev, [field]: obj.value }));
  };

  const handleError = (field) => (msg) => {
    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const handleCreate = () => {
    if (!validateForm()) {
      console.log('Form has errors');
      return;
    }

    console.log('EVENT CREATED:', form);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Top>
          <CreateEventTxt>Create New Event</CreateEventTxt>
          <CreateEventS>
            Fill in the details below to create a new event
          </CreateEventS>
        </Top>

        <Form>
          <Field>
            <LabelTxt>Event Name *</LabelTxt>
            <Input
              type="text"
              name="title"
              placeholder="e.g., Annual Conference 2025"
              value={form.title}
              onChange={handleInputChange('title')}
              validations={['required']}
              error={errors.title}
              setError={handleError('title')}
            />
          </Field>
          <Field>
            <RoleDropdown
              label="Event Type"
              value={form.type}
              placeholder="Select event type"
              onChange={(opt) => setForm({ ...form, type: opt })}
              options={[
                { value: 'public', label: 'Public' },
                { value: 'private', label: 'Private' },
                { value: 'corporate', label: 'Corporate' },
              ]}
            />
          </Field>
          <Row>
            <Field>
              <LabelTxt>Event Date *</LabelTxt>

              <Input
                type="date"
                name="date"
                value={form.date}
                onChange={handleInputChange('date')}
                validations={['required']}
                error={errors.date}
                setError={handleError('date')}
              />
            </Field>

            <Field>
              <LabelTxt>Event Time *</LabelTxt>
              <Input
                type="time"
                name="time"
                value={form.time}
                onChange={handleInputChange('time')}
                validations={['required']}
                error={errors.time}
                setError={handleError('time')}
              />
            </Field>
          </Row>
          <Field>
            <LabelTxt>Venue *</LabelTxt>

            <Input
              type="text"
              name="venue"
              placeholder="e.g., Grand Ballroom, City Convention Center"
              value={form.venue}
              onChange={handleInputChange('venue')}
              validations={['required']}
              error={errors.venue}
              setError={handleError('venue')}
            />
          </Field>

          <Field>
            <LabelTxt>Expected Attendees *</LabelTxt>

            <Input
              type="number"
              name="attendees"
              placeholder="e.g., 150"
              value={form.attendees}
              onChange={handleInputChange('attendees')}
              validations={['required']}
              error={errors.attendees}
              setError={handleError('attendees')}
            />
          </Field>

          <Field>
            <RoleDropdown
              label="Assign Event Manager"
              value={form.manager}
              placeholder="Select event manager"
              onChange={(opt) => setForm({ ...form, manager: opt })}
              options={[
                { value: 'none', label: 'No Manager Assigned' },
                { value: 'john', label: 'John Smith' },
                { value: 'sarah', label: 'Sarah Johnson' },
              ]}
            />
          </Field>
          <Field>
            <LabelTxt>Event Description</LabelTxt>
            <Input
              type="textarea"
              name="description"
              placeholder="Provide additional details about the event…"
              value={form.description}
              onChange={handleInputChange('description')}
              rows={8}
              style={{ height: '160px', resize: 'none' }}
            />
          </Field>
        </Form>
        <Actions>
          <CreateB>
            <Button onClick={handleCreate}>Create Event</Button>
          </CreateB>
          <CancelB>
            <Button onClick={onClose}>Cancel</Button>
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

  label {
    font-size: 13px;
    font-weight: 600;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-top: 18px;
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
