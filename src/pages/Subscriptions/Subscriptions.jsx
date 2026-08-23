import React, { useState } from "react";
import {
  StyledHeading,
  StyledParagraphBold,
  StyledParagraphSmallGray,
  StyledParagraphGray,
} from "../../components/Styled/Typography.styled";
import {
  ButtonWrapper,
  Cards,
  ChoosePlan,
  Discount,
  Feature,
  Features,
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
  PlanDivider,
  SpanButton,
} from "./Subscriptions.styled";
import * as enums from "../../myEnum";
import { Button } from "../../components/Buttons/Button";

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
        <StyledHeading>{enums.CHOOSE_PLAN}</StyledHeading>
        <StyledParagraphGray>{enums.ENJOY_MESSAGE}</StyledParagraphGray>

        <ToggleRow>
          <StyledParagraphBold className={!yearly ? "active" : ""}>
            {enums.MONTH}
          </StyledParagraphBold>
          <ToggleSwitch onClick={() => setYearly((v) => !v)}>
            <ToggleKnob $move={yearly} />
          </ToggleSwitch>
          <StyledParagraphBold className={yearly ? "active" : ""}>
            {enums.YEAR}
          </StyledParagraphBold>
          <Discount>{enums.DISCOUNT}</Discount>
        </ToggleRow>

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
                <StyledParagraphGray>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </StyledParagraphGray>
              </TitleRow>

              <Price>
                ${compute(price)}
                <small>{enums.MONTH}</small>
              </Price>

              <PlanDivider $selected={selected === key} />

              <MobileLine>{enums.MARKETING_LINE}</MobileLine>

              <Features>
                {FEATURE_MAP[key]?.map((feature, index) => (
                  <Feature key={index} $selected={selected === key}>
                    {feature}
                  </Feature>
                ))}
              </Features>

              <ButtonWrapper>
                <Button>{enums.GET_STARTED}</Button>
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
