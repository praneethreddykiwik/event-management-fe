import { PAYMENT_PAGE } from "../../myEnum/Payment.common";
import styled from "styled-components";
import payment_img from "../../assets/payment_images/payment_img.jpg";
import PaymentSuccessfull2 from "./PaymentSuccessfull2";
import Details2 from "./Details2";

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
                style={{ fontSize: "18px", marginRight: "4px" }}
              >
                {PAYMENT_PAGE.SHARE_I}
              </Stylespan>
              <Stylespan>{PAYMENT_PAGE.SHARE_TEXT}</Stylespan>
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
`;

const RightCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  width: 400px;
  padding: 12px 12px 40px 12px; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 770px;
`;

const EventImage = styled.img`
  width: 900px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;
`;

const ButtonGroup = styled.div`
  width: calc(100% - 24px);
  display: flex;
  align-items: center;
  gap: 12px; 
  justify-content: center;
  margin-top: 16px; 
`;

const DownloadCard = styled.div`
  flex: 0 0 260px;
  background: transparent;
  padding: 16px; 
  display: flex;
  padding-right: 8px; 
  margin-right: -70px;
`;

const DownloadBtn = styled.button`
  width: 80%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary});
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 8px 12px; 
  border-radius: 28px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  box-shadow: 0 10px 26px rgba(16, 185, 129, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

const ShareLink = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
`;

const ShareBtn = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography["body-small"]["font-size"]};
  display: inline-flex;
  align-items: right;
  padding-right: 40px; 
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
`;
