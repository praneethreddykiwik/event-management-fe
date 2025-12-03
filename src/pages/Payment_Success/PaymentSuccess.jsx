import React from "react";

import payment_img from "../../assets/payment_images/payment_img.jpg";
import { Button } from "../../components/Buttons/Button.jsx";
import {
  Amount, BadgeIcon,
  ButtonGroup, CancelBtn,
  CancelWrap, Container,
  DashedDivider, DetailsCard,
  DetailsTitle, Divider,
  DownloadBtn, DownloadCard,
  EventImage, HighlightText,
  InfoButton, InsuranceRow,
  LeftCard, Promo, PromoField,
  PromoInput, PromoTitle, RightCard,
  ShareBtn, ShareLink, StRow, Stylebr,
  Styledb, StyledHeading, StyledPage,
  StyledPara, Stylespan, Stylespan2,
  SuccessBadge, Summary, SummaryTitle,
  Terms, ToggleSwitch, TotalRow, Value,
  VenueAddress, VenueCard, VenueTitle
} from "./PaymentSuccess.s.Styles.jsx";
import { PAYMENT_PAGE } from "../../enum/common.jsx";
import { rows } from "./Payment.helper.jsx";


const PaymentSuccess = () => {
  return (
    <StyledPage>
      <Container>
        <LeftCard>
          <BadgeIcon>
            <Stylespan className="material-icons" style={{ fontSize: "18px", color: "#0d0d0dff" }}> check_circle</Stylespan>
          </BadgeIcon>
          <StyledHeading>{PAYMENT_PAGE.SATISFACTION_TITLE}</StyledHeading>
          <StyledPara>{PAYMENT_PAGE.SATISFACTION_PARA}</StyledPara>
          <Divider />

          <Summary>
            <SummaryTitle>{PAYMENT_PAGE.SUMMARY_TEXT}</SummaryTitle>

            <StRow>
              <Stylespan>{PAYMENT_PAGE.SUMMARY_ITEMS}</Stylespan>
            </StRow>
            <Divider />

            <InsuranceRow>
              <Stylespan>{PAYMENT_PAGE.INSURANCE_TEXT}</Stylespan>
              <InfoButton>
                <Stylespan className="material-icons" style={{ fontSize: "18px" }}>info</Stylespan>
              </InfoButton>
              <ToggleSwitch />
            </InsuranceRow>

            {rows.map((item, index) => (
              <StRow key={index}>
                <Stylespan>{item.label}</Stylespan>
                <Stylespan>{item.value}</Stylespan>
              </StRow>
            ))}

            <Divider />

            <TotalRow>
              <Stylespan2>{PAYMENT_PAGE.TOTAL}</Stylespan2>
              <Stylespan>{PAYMENT_PAGE.TOTAL_VALUE}</Stylespan>
            </TotalRow>
          </Summary>
          <Divider />

          <Promo>
            <PromoTitle>{PAYMENT_PAGE.PROMO_TEXT}</PromoTitle>
            <PromoInput>
              <PromoField type="text" placeholder="Add code" />

              <Button>{PAYMENT_PAGE.ADD_BTN}</Button>
            </PromoInput>
          </Promo>

          <Terms>
            {PAYMENT_PAGE.TERMS_TEXT}
            <HighlightText>{PAYMENT_PAGE.HIGHLIGHT_TEXT}</HighlightText> {PAYMENT_PAGE.TERMS_TEXT2}
            <HighlightText>{PAYMENT_PAGE.HIGHLIGHT_TEXT2}</HighlightText> {PAYMENT_PAGE.TERMS_TEXT3}
            <Styledb>{PAYMENT_PAGE.STYLED_TEXT}</Styledb> {PAYMENT_PAGE.TERMS_TEXT4} <Styledb>{PAYMENT_PAGE.STYLED_TEXT2}</Styledb>
          </Terms>
        </LeftCard>


        <RightCard>
          <EventImage src={payment_img} alt="Event" />

          <VenueCard>
            <VenueTitle>{PAYMENT_PAGE.VENUE_TEXT}</VenueTitle>
            <VenueAddress>
              {PAYMENT_PAGE.VENUE_ADDRESS}
            </VenueAddress>
            <SuccessBadge>
              <BadgeIcon>
                <Stylespan className="material-icons" style={{ fontSize: "18px", color: "#16a34a" }}> check_circle </Stylespan>
              </BadgeIcon>
              <Stylespan>{PAYMENT_PAGE.PAYMENT_SUCESS}</Stylespan>
            </SuccessBadge>
          </VenueCard>

          <DetailsCard>
            <DetailsTitle>{PAYMENT_PAGE.DETAILS}</DetailsTitle>


            <StRow>
              <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT}</Stylespan>
              <Value>{PAYMENT_PAGE.REF_VALUE}</Value>
            </StRow>

            <StRow>
              <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT2}</Stylespan>
              <Value>{PAYMENT_PAGE.REF_VALUE2}</Value>
            </StRow>

            <StRow>
              <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT3}</Stylespan>
              <Value>{PAYMENT_PAGE.REF_VALUE3}</Value>
            </StRow>

            <StRow>
              <Stylespan>{PAYMENT_PAGE.REFERENCE_TEXT4}</Stylespan>
              <Value>{PAYMENT_PAGE.REF_VALUE4}</Value>
            </StRow>

            <DashedDivider />

            <TotalRow>
              <Stylespan>{PAYMENT_PAGE.TOTAL_AMOUNT}</Stylespan>
              <Amount>{PAYMENT_PAGE.TOTAL_VALUE}</Amount>
            </TotalRow>
          </DetailsCard>

          <ButtonGroup>
            <DownloadCard>
              <DownloadBtn>
                <Stylespan className="material-icons" style={{ fontSize: "18px", marginRight: "6px" }}> download</Stylespan>
                <Stylespan>{PAYMENT_PAGE.DOWNLOAD_TEXT}</Stylespan>
              </DownloadBtn>
            </DownloadCard>

            <ShareLink>
              <ShareBtn>
                <Stylespan className="material-icons" style={{ fontSize: "18px", marginRight: "4px" }}> share</Stylespan>
                <Stylespan>{PAYMENT_PAGE.SHARE_TEXT}</Stylespan>
              </ShareBtn>
            </ShareLink>
          </ButtonGroup>

          <CancelWrap>
            <CancelBtn>{PAYMENT_PAGE.CANCEL_TEXT}</CancelBtn>
          </CancelWrap>
        </RightCard>
      </Container>
    </StyledPage>
  );
};

export default PaymentSuccess;


