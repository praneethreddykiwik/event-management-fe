/** @format */

export const eventFormConfig = [
  {
    name: 'title',
    label: 'Event Name *',
    type: 'text',
    component: 'input',
    placeholder: 'e.g., Annual Conference',
    // validations: ['required'],
  },

  {
    name: 'type',
    label: 'Event Type ',
    type: 'select',
    component: 'select',
    options: [
      { value: 'public', label: 'Public' },
      { value: 'private', label: 'Private' },
      { value: 'corporate', label: 'Corporate' },
    ],
    // validations: ['required'],
  },

  {
    group: 'row',
    fields: [
      {
        name: 'date',
        label: 'Event Date *',
        type: 'date',
        component: 'input',
        // validations: ['required'],
      },
      {
        name: 'time',
        label: 'Event Time *',
        type: 'time',
        component: 'input',
        // validations: ['required'],
      },
    ],
  },

  {
    name: 'venue',
    label: 'Venue *',
    type: 'text',
    component: 'input',
    placeholder: 'e.g., Grand Ballroom, City Convention Center',
    // validations: ['required'],
  },

  {
    name: 'attendees',
    label: 'Expected Attendees *',
    type: 'number',
    component: 'input',
    placeholder: 'e.g. 150',
    // validations: ['required'],
  },

  {
    name: 'manager',
    label: 'Assign Event Manager ',
    type: 'select',
    component: 'select',
    options: [
      { value: 'none', label: 'No Manager Assigned' },
      { value: 'john', label: 'John Smith' },
      { value: 'sarah', label: 'Sarah Johnson' },
    ],
    // validations: ['required'],
  },

  {
    name: 'description',
    label: 'Event Description',
    type: 'textarea',
    component: 'textarea',
    placeholder: 'Provide additional details...',
    // validations: [],
  },
];
