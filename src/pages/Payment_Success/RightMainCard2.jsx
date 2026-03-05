import { PAYMENT_PAGE } from "../../myEnum/Payment.common";
import styled from "styled-components";
import payment_img from "../../assets/payment_images/payment_img.jpg";
import PaymentSuccessfull2 from "./PaymentSuccessfull2";
import Details2 from "./Details2";
import { StyledNoBorderButton } from "../../components/Styled/Buttons.styled";
import { mobile } from "../../theme/media-queries";

const RightMainCard2 = () => {
  return (
    <>
      <RightCard>
        <EventImage src={payment_img} alt="Event" />
        <PaymentSuccessfull2 />
        <Details2 />
        <ButtonGroup>
          <DownloadCard>
            <DownloadBtn>
              <Stylespan
                className="material-icons"
                style={{ fontSize: "18px", marginRight: "6px" }}
              >
                {PAYMENT_PAGE.DOWNLOAD_ICON}
              </Stylespan>
              <Stylespan>{PAYMENT_PAGE.DOWNLOAD_TEXT}</Stylespan>
            </DownloadBtn>
          </DownloadCard>

          <ShareLink>
            <ShareBtn>
              <Stylespan
                className="material-icons"
              >
                {PAYMENT_PAGE.SHARE_I}
              </Stylespan>
              <Stylespan className="hide-on-mobile">{PAYMENT_PAGE.SHARE_TEXT}</Stylespan>
            </ShareBtn>
          </ShareLink>
        </ButtonGroup>

        <CancelWrap>
          <CancelBtn>{PAYMENT_PAGE.CANCEL_TEXT}</CancelBtn>
        </CancelWrap>
      </RightCard>
    </>
  );
};
export default RightMainCard2;

const Stylespan = styled.span`

  &.hide-on-mobile {
    ${mobile`
      display: none;
    `}
  }

  &.material-icons {
    font-size: 18px;

    ${mobile`
      font-size: 26px;
    `}
  }
`;

const RightCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  width: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 770px;

  ${mobile`
    width: 100%;
    height: auto;
  `}
`;

const EventImage = styled.img`
  width: 900px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;

  ${mobile`
    height: 140px;
  `}
`;

const ButtonGroup = styled.div`
  width: calc(100% - 24px);
  display: flex;
  align-items: center;
  gap: 12px; 
  justify-content: center;
  margin-top: 16px; 

  ${mobile`
    flex-direction:row;
    gap: 10px;
  `}
`;

const DownloadCard = styled.div`
  flex: 0 0 260px;
  background: transparent;
  padding: 16px; 
  display: flex;
  padding-right: 8px; 
  margin-right: -40px;

  ${mobile`
    flex: 1;
    display: flex;
  `}
`;

const DownloadBtn = styled(StyledNoBorderButton)`
  width: 80%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary});
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ShareLink = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ShareBtn = styled.button`
  cursor: pointer;
  padding-right: 40px;
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  display: inline-flex;
  align-items: center;
  gap: 6px;

   ${mobile`
    text: disable;
  `}
`;

const CancelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px; 
`;

const CancelBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  margin-bottom: 20px;
`;
