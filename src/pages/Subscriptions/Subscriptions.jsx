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
} from "./Styled.Subscriptions";
import {
  access,
  add_more,
  advance_audit,
  advance_downloads,
  advance_features,
  and,
  attendance,
  audit,
  backup,
  buy_now,
  chat,
  chat_support,
  choose_plan,
  discount,
  download,
  download_1,
  enjoy_message,
  get_started,
  marketing_line,
  mo,
  month,
  more_storage,
  privacy,
  service,
  skip_trial,
  skip_trial_1,
  storge,
  super_storage,
  terms,
  year,
  agree,
} from "../../enums/Subscriptions.enum";

const Subscriptions = () => {
  const [yearly, setYearly] = useState(false);
  const [selected, setSelected] = useState("standard");
  const [hasAgreed, setHasAgreed] = useState(false);

  const yearlyDiscount = 0.15;
  const priceMonthly = { starter: 37, standard: 77, pro: 150 };
  const compute = (base) =>
    yearly ? Math.round(base * (1 - yearlyDiscount)) : base;

  const mobileOneLiner = marketing_line;

  return (
    <StyledContainer>
      <ChoosePlan>
        <Header>
          <ChoosePlanTxt>{choose_plan}</ChoosePlanTxt>
          <p>{enjoy_message}</p>

          <ToggleRow>
            <span className={!yearly ? "active" : ""}>{month}</span>
            <ToggleSwitch onClick={() => setYearly((v) => !v)}>
              <ToggleKnob $move={yearly} />
            </ToggleSwitch>
            <span className={yearly ? "active" : ""}>{year}</span>
            <Discount>{discount}</Discount>
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
                <small>{mo}</small>
              </Price>

             
              <MobileLine>{mobileOneLiner}</MobileLine>

              <Features>
                {key === "starter" && (
                  <>
                    <Feature $selected={selected === key}>{access}</Feature>
                    <Feature $selected={selected === key}>{download}</Feature>
                    <Feature $selected={selected === key}>{audit}</Feature>
                    <Feature $selected={selected === key}>{storge}</Feature>
                    <Feature $selected={selected === key}>{chat}</Feature>
                  </>
                )}
                {key === "standard" && (
                  <>
                    <Feature $selected={selected === key}>{attendance}</Feature>
                    <Feature $selected={selected === key}>{download_1}</Feature>
                    <Feature $selected={selected === key}>
                      {advance_features}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {more_storage}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {chat_support}
                    </Feature>
                    <Feature $selected={selected === key}>{backup}</Feature>
                  </>
                )}
                {key === "pro" && (
                  <>
                    <Feature $selected={selected === key}>
                      {advance_audit}
                    </Feature>
                    <Feature $selected={selected === key}>{service}</Feature>
                    <Feature $selected={selected === key}>
                      {advance_downloads}
                    </Feature>
                    <Feature $selected={selected === key}>
                      {super_storage}
                    </Feature>
                    <Feature $selected={selected === key}>{add_more}</Feature>
                  </>
                )}
              </Features>

              <ButtonWrapper>
                <StyledBaseButton>{get_started}</StyledBaseButton>
              </ButtonWrapper>

              <SmallText $selected={selected === key}>
                {skip_trial} <a href="#">{buy_now}</a>
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
            {agree} <a href="#">{terms}</a> {and} <a href="#">{privacy}</a>
          </span>
        </TermsRow>

        <MobileCTA>
          <button disabled={!hasAgreed}>{get_started}</button>
        </MobileCTA>

        <MobileSkip>{skip_trial_1}</MobileSkip>
      </ChoosePlan>
    </StyledContainer>
  );
};

export default Subscriptions;
