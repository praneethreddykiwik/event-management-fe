/** @format */

export const inputValidation = (value, validations = []) => {
  for (let rule of validations) {
    if (rule === 'required') {
      if (typeof value === 'string' && value.trim() === '') {
        return 'This field is required';
      }

      if (typeof value === 'number' && isNaN(value)) {
        return 'This field is required';
      }

      if (Array.isArray(value) && value.length === 0) {
        return 'Please select at least one option';
      }

      if (value === null || value === undefined) {
        return 'This field is required';
      }
    }

    if (rule === 'email') {
      if (typeof value === 'string' && value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Enter a valid email address';
        }
      }
    }

    if (typeof rule === 'object' && rule.type === 'min-length') {
      if (typeof value === 'string' && value.length < rule.value) {
        return `Minimum ${rule.value} characters required`;
      }
    }
  }

  return '';
};
