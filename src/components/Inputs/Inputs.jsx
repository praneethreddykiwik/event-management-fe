import Dropdown from "./Dropdown";
import { Password } from "./Password";
import { BaseInput } from "./BaseInput";
import { NumberInput } from "./NumberInput";
import { DateInput } from "./DateInput";
import { TextArea } from "./TextArea";
import { TimeInput } from "./TimeInput";
import { RadioGroup } from "./RadioGroup";
import { CheckboxGroup } from "./CheckboxGroup";
import { Checkbox } from "./Checkbox";
import { DateTimeLocal } from "./DateTimeLocal";

export const Inputs = (props) => {
  const { type } = props;

  switch (type) {
    case "text":
      return <BaseInput {...props} />;

    case "email":
      return <BaseInput {...props} />;

    case "number":
      return <NumberInput {...props} />;

    case "password":
      return <Password {...props} />;

    case "setPassword":
      return <Password {...props} confirmPassword />;

    case "dropdown":
      return <Dropdown {...props} />;

    case "date":
      return <DateInput {...props} />;

    case "time":
      return <TimeInput {...props} />;

    case "datetime-local":
      return <DateTimeLocal {...props} />;

    case "textarea":
      return <TextArea {...props} />;

    case "checkbox":
      return <Checkbox {...props} />;

    case "checkbox-group":
      return <CheckboxGroup {...props} />;

    case "radio-group":
      return <RadioGroup {...props} />;

    default:
      return null;
  }
};
