import { useState } from "react";
import {
  Form,
  Checkbox,
  LabelText,
  Row,
} from "../../components/Styled/AccountSettings.styled";
import { SettingOptions } from "./AccountSettings.helper";


const AccountSettingsForm = () => {
  const [settings, setSettings] = useState({
    blockAdult: false,
    optOutRecommendations: false,
    noSearchIndex: false,
    autoUpdate: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <Form>
      {SettingOptions.map(({ name, label }) => (
        <Row key={name}>
          <Checkbox
            name={name}
            checked={settings[name]}
            onChange={handleChange}
          />
          <LabelText>{label}</LabelText>
        </Row>
      ))}
    </Form>
  );
};

export default AccountSettingsForm;
