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

  return (
    <StyledContainer>
      <ChoosePlan>
        <Header>
          <ChoosePlanTxt>{SUBSCRIPTIONS_ENUM.CHOOSE_PLAN}</ChoosePlanTxt>
          <Message>{SUBSCRIPTIONS_ENUM.enjoy_message}</Message>

          <ToggleRow>
            <span className={!yearly ? "active" : ""}>
              {SUBSCRIPTIONS_ENUM.month}
            </span>
            <ToggleSwitch onClick={() => setYearly((v) => !v)}>
              <ToggleKnob $move={yearly} />
            </ToggleSwitch>
            <span className={yearly ? "active" : ""}>
              {SUBSCRIPTIONS_ENUM.year}
            </span>
            <Discount>{SUBSCRIPTIONS_ENUM.discount}</Discount>
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
                <small>{SUBSCRIPTIONS_ENUM.mo}</small>
              </Price>

              <PlanDivider $selected={selected === key} />

              <MobileLine>{SUBSCRIPTIONS_ENUM.mobileOneLiner}</MobileLine>

              <Features>
                {key === "starter" && (
                  <>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.access}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.download}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.audit}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.storge}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.chat}
                    </Feature>
                  </>
                )}
                {key === "standard" && (
                  <>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.attendance}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.download_1}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.advance_features}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.more_storage}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.chat_support}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.backup}
                    </Feature>
                  </>
                )}
                {key === "pro" && (
                  <>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.advance_audit}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.service}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.advance_downloads}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.super_storage}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {SUBSCRIPTIONS_ENUM.add_more}
                    </Feature>
                  </>
                )}
              </Features>

              <ButtonWrapper>
                <StyledBaseButton>
                  {SUBSCRIPTIONS_ENUM.get_started}
                </StyledBaseButton>
              </ButtonWrapper>

              <SmallText $selected={selected === key}>
                {SUBSCRIPTIONS_ENUM.skip_trial}{" "}
                <a href="#">{SUBSCRIPTIONS_ENUM.buy_now}</a>
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
          <span>
            {SUBSCRIPTIONS_ENUM.agree}{" "}
            <a href="#">{SUBSCRIPTIONS_ENUM.terms}</a> {SUBSCRIPTIONS_ENUM.and}{" "}
            <a href="#">{SUBSCRIPTIONS_ENUM.privacy}</a>
          </span>
        </TermsRow>

        <MobileCTA>
          <button disabled={!hasAgreed}>
            {SUBSCRIPTIONS_ENUM.get_started}
          </button>
        </MobileCTA>

        <MobileSkip>{SUBSCRIPTIONS_ENUM.skip_trial_1}</MobileSkip>
      </ChoosePlan>
    </StyledContainer>
  );
};

export default Subscriptions;
