import { useState } from "react";
import {
  PageWrapper,
  Card,
  ShieldIcon,
  Title,
  SubTitle,
  OptionCard,
  IconCircle,
  OptionText,
  OptionTitle,
  OptionSub,
  RadioDot,
  PrimaryButton,
  BackText,
  SecurityNote,
} from "./Styles.TwoFactorAuthPage";

const TwoFactorAuthPage = () => {
  const [selected, setSelected] = useState("email");

  const handleSendCode = () => {
    console.log("Send code via:", selected);
  };

  return (
    <PageWrapper>
      <Card>
        <ShieldIcon>
          <i className="material-icons">shield</i>
        </ShieldIcon>

        <Title>Two-Factor Authentication</Title>
        <SubTitle>
          Choose how you'd like to receive your verification code
        </SubTitle>

        <OptionCard
          active={selected === "email"}
          onClick={() => setSelected("email")}
        >
          <IconCircle>
            <span className="material-icons">mail</span>
          </IconCircle>

          <OptionText>
            <OptionTitle>Email Verification</OptionTitle>
            <OptionSub>Send code to user@example.com</OptionSub>
          </OptionText>

          <RadioDot active={selected === "email"} />
        </OptionCard>

        <OptionCard
          active={selected === "sms"}
          onClick={() => setSelected("sms")}
        >
          <IconCircle>
            <span className="material-icons">call</span>
          </IconCircle>

          <OptionText>
            <OptionTitle>SMS Verification</OptionTitle>
            <OptionSub>Send code to +1 (***) ***-1234</OptionSub>
          </OptionText>

          <RadioDot active={selected === "sms"} />
        </OptionCard>

        <PrimaryButton onClick={handleSendCode}>
          Send Verification Code
        </PrimaryButton>

        <BackText>Back to Login</BackText>

        <SecurityNote>
          🔒 For your security, you'll need to verify your identity each time
          you sign in from a new device.
        </SecurityNote>
      </Card>
    </PageWrapper>
  );
};

export default TwoFactorAuthPage;
