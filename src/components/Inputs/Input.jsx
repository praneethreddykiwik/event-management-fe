import {
  InputDefault,
  InputNumber,
  InputPassword,
  InputCheckbox,
  InputRadio,
} from '../Styled/Inputs.styled';

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  list = [],
  disabled,
}) => {
  const makeId = (item) =>
    `${name}-${String(item).toLowerCase().replace(/\s+/g, '-')}`;

  switch (type) {
    case 'text':
      return (
        <InputDefault
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange({ value: e.target.value })}
          disabled={disabled}
        />
      );

    case 'number':
      return (
        <InputNumber
          id={name}
          name={name}
          type="number"
          placeholder={placeholder}
          value={value ?? ''}
          onChange={(e) => onChange({ value: e.target.value })}
          disabled={disabled}
        />
      );

    case 'password':
      return (
        <InputPassword
          id={name}
          name={name}
          type="password"
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange({ value: e.target.value })}
          disabled={disabled}
        />
      );

    case 'checkbox-group':
      return (
        <div role="group" aria-labelledby={`${name}-label`}>
          <div id={`${name}-label`} style={{ marginBottom: 6, fontSize: 14 }}>
            {placeholder}
          </div>
          {list.map((item) => {
            const id = makeId(item);
            const isChecked = Array.isArray(value) && value.includes(item);
            return (
              <label
                key={id}
                htmlFor={id}
                style={{
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                  marginBottom: 6,
                  cursor: 'pointer',
                }}
              >
                <InputCheckbox
                  id={id}
                  name={name}
                  type="checkbox"
                  checked={!!isChecked}
                  onChange={(e) =>
                    onChange({
                      type: 'checkbox-toggle',
                      checked: e.target.checked,
                      item,
                    })
                  }
                  disabled={disabled}
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>
      );

    case 'radio-group':
      return (
        <div role="radiogroup" aria-labelledby={`${name}-label`}>
          <div id={`${name}-label`} style={{ marginBottom: 6, fontSize: 14 }}>
            {placeholder}
          </div>
          {list.map((item) => {
            const id = makeId(item);
            const isChecked = value === item;
            return (
              <label
                key={id}
                htmlFor={id}
                style={{
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                  marginBottom: 6,
                  cursor: 'pointer',
                }}
              >
                <InputRadio
                  id={id}
                  name={name}
                  type="radio"
                  checked={!!isChecked}
                  onChange={() => onChange({ value: item })}
                  disabled={disabled}
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>
      );

    default:
      return (
        <InputDefault
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange({ value: e.target.value })}
          disabled={disabled}
        />
      );
  }
};
