import React, { useState } from "react";
import { StyledBaseButton } from "../../components/Styled/Buttons.styled";
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
import * as enums from "../../myEnum";

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
      enums.ACCESS,
      enums.DOWNLOAD,
      enums.AUDIT,
      enums.STORGE,
      enums.CHAT,
    ],

    standard: [
      enums.ATTENDANCE,
      enums.DOWNLOAD_1,
      enums.ADVANCE_FEATURES,
      enums.MORE_STORAGE,
      enums.CHAT_SUPPORT,
      enums.BACKUP,
    ],

    pro: [
      enums.ADVANCE_AUDIT,
      enums.SERVICE,
      enums.ADVANCE_DOWNLOADS,
      enums.SUPER_STORAGE,
      enums.ADD_MORE,
    ],
  };

  return (
    <StyledContainer>
      <ChoosePlan>
        <Header>
          <ChoosePlanTxt>{enums.CHOOSE_PLAN}</ChoosePlanTxt>
          <Message>{enums.ENJOY_MESSAGE}</Message>

          <ToggleRow>
            <SpanButton className={!yearly ? "active" : ""}>
              {enums.MONTH}
            </SpanButton>
            <ToggleSwitch onClick={() => setYearly((v) => !v)}>
              <ToggleKnob $move={yearly} />
            </ToggleSwitch>
            <SpanButton className={yearly ? "active" : ""}>
              {enums.YEAR}
            </SpanButton>
            <Discount>{enums.DISCOUNT}</Discount>
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
                <small>{enums.MONTH}</small>
              </Price>

              <PlanDivider $selected={selected === key} />

              <MobileLine>{enums.mobileOneLiner}</MobileLine>

              <Features>
                {FEATURE_MAP[key]?.map((feature, index) => (
                  <Feature key={index} $selected={selected === key}>
                    {feature}
                  </Feature>
                ))}
              </Features>

              <ButtonWrapper>
                <StyledBaseButton>{enums.GET_STARTED}</StyledBaseButton>
              </ButtonWrapper>

              <SmallText $selected={selected === key}>
                {enums.SKIP_TRIAL} <a href="#">{enums.BUY_NOW}</a>
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
            {enums.AGREE} <a href="#">{enums.BY_USING_OUR_TERMS}</a> {enums.AND}{" "}
            <a href="#">{enums.PRIVACY}</a>
          </SpanButton>
        </TermsRow>

        <MobileCTA>
          <button disabled={!hasAgreed}>{enums.GET_STARTED}</button>
        </MobileCTA>

        <MobileSkip>{enums.SKIP_TRIAL_1}</MobileSkip>
      </ChoosePlan>
    </StyledContainer>
  );
};

export default Subscriptions;
