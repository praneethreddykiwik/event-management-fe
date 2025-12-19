import React, { useState } from "react";
import {
  StyledBaseButton,
  StyledSecButton,
} from "../../components/Styled/Buttons.styled";
import { StyledHeading } from "../../components/Styled/Typography.styled";
import {
  ButtonWrapper,
  Cards,
  ChoosePlan,
  ChoosePlanTxt,
  Discount,
  Feature,
  Features,
  Header,
  MobileCTA,
  MobileDot,
  MobileLine,
  MobileSkip,
  PlanCard,
  Price,
  SmallText,
  StyledContainer,
  TermsRow,
  TitleRow,
  ToggleKnob,
  ToggleRow,
  ToggleSwitch,
  Message,
  PlanDivider,
  SpanButton,
} from "./Subscriptions.styled";
import { SUBSCRIPTIONS_ENUM } from "../../enums/Subscriptions.enum";

const Subscriptions = () => {
  const [yearly, setYearly] = useState(false);
  const [selected, setSelected] = useState("standard");
  const [hasAgreed, setHasAgreed] = useState(false);

  const yearlyDiscount = 0.15;
  const priceMonthly = { starter: 37, standard: 77, pro: 150 };
  const compute = (base) =>
    yearly ? Math.round(base * (1 - yearlyDiscount)) : base;

  const FEATURE_MAP = {
    starter: [
      SUBSCRIPTIONS_ENUM.ACCESS,
      SUBSCRIPTIONS_ENUM.DOWNLOAD,
      SUBSCRIPTIONS_ENUM.AUDIT,
      SUBSCRIPTIONS_ENUM.STORGE,
      SUBSCRIPTIONS_ENUM.CHAT,
    ],

    standard: [
      SUBSCRIPTIONS_ENUM.ATTENDANCE,
      SUBSCRIPTIONS_ENUM.DOWNLOAD_1,
      SUBSCRIPTIONS_ENUM.ADVANCE_FEATURES,
      SUBSCRIPTIONS_ENUM.MORE_STORAGE,
      SUBSCRIPTIONS_ENUM.CHAT_SUPPORT,
      SUBSCRIPTIONS_ENUM.BACKUP,
    ],

    pro: [
      SUBSCRIPTIONS_ENUM.ADVANCE_AUDIT,
      SUBSCRIPTIONS_ENUM.SERVICE,
      SUBSCRIPTIONS_ENUM.ADVANCE_DOWNLOADS,
      SUBSCRIPTIONS_ENUM.SUPER_STORAGE,
      SUBSCRIPTIONS_ENUM.ADD_MORE,
    ],
  };

  return (
    <StyledContainer>
      <ChoosePlan>
        <Header>
          <ChoosePlanTxt>{SUBSCRIPTIONS_ENUM.CHOOSE_PLAN}</ChoosePlanTxt>
          <Message>{SUBSCRIPTIONS_ENUM.ENJOY_MESSAGE}</Message>

          <ToggleRow>
            <SpanButton className={!yearly ? "active" : ""}>
              {SUBSCRIPTIONS_ENUM.MONTH}
            </SpanButton>
            <ToggleSwitch onClick={() => setYearly((v) => !v)}>
              <ToggleKnob $move={yearly} />
            </ToggleSwitch>
            <SpanButton className={yearly ? "active" : ""}>
              {SUBSCRIPTIONS_ENUM.YEAR}
            </SpanButton>
            <Discount>{SUBSCRIPTIONS_ENUM.DISCOUNT}</Discount>
          </ToggleRow>
        </Header>

        <Cards role="radiogroup" aria-label="Pricing plans">
          {Object.entries(priceMonthly).map(([key, price]) => (
            <PlanCard
              key={key}
              role="radio"
              aria-checked={selected === key}
              tabIndex={0}
              $selected={selected === key}
              onClick={() => setSelected(key)}
              onFocus={() => setSelected(key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(key);
              }}
            >
              <TitleRow>
                <MobileDot $selected={selected === key} />
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              </TitleRow>

              <Price>
                ${compute(price)}
                <small>{SUBSCRIPTIONS_ENUM.MONTH}</small>
              </Price>

              <PlanDivider $selected={selected === key} />

              <MobileLine>{SUBSCRIPTIONS_ENUM.mobileOneLiner}</MobileLine>

              <Features>
                {FEATURE_MAP[key]?.map((feature, index) => (
                  <Feature key={index} $selected={selected === key}>
                    {feature}
                  </Feature>
                ))}
              </Features>

              <ButtonWrapper>
                <StyledBaseButton>
                  {SUBSCRIPTIONS_ENUM.GET_STARTED}
                </StyledBaseButton>
              </ButtonWrapper>

              <SmallText $selected={selected === key}>
                {SUBSCRIPTIONS_ENUM.SKIP_TRIAL}{" "}
                <a href="#">{SUBSCRIPTIONS_ENUM.BUY_NOW}</a>
              </SmallText>
            </PlanCard>
          ))}
        </Cards>

        <TermsRow htmlFor="agree">
          <input
            id="agree"
            type="checkbox"
            checked={hasAgreed}
            onChange={(e) => setHasAgreed(e.target.checked)}
          />
          <SpanButton>
            {SUBSCRIPTIONS_ENUM.AGREE}{" "}
            <a href="#">{SUBSCRIPTIONS_ENUM.TERMS}</a> {SUBSCRIPTIONS_ENUM.AND}{" "}
            <a href="#">{SUBSCRIPTIONS_ENUM.PRIVACY}</a>
          </SpanButton>
        </TermsRow>

        <MobileCTA>
          <button disabled={!hasAgreed}>
            {SUBSCRIPTIONS_ENUM.GET_STARTED}
          </button>
        </MobileCTA>

        <MobileSkip>{SUBSCRIPTIONS_ENUM.SKIP_TRIAL_1}</MobileSkip>
      </ChoosePlan>
    </StyledContainer>
  );
};

export default Subscriptions;
