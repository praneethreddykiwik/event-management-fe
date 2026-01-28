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
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  width: 400px;
  // padding: 0 18px 26px 18px;
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
  gap: 18px;
  justify-content: center;
  margin-top: 20px;
`;

const DownloadCard = styled.div`
  flex: 0 0 260px;
  background: transparent;
  padding: 25px;
  display: flex;
  padding-right: 10px;
  margin-right: -70px;
`;

const DownloadBtn = styled.button`
  width: 90%;
  background: linear-gradient(90deg, #16a34a, #16a34a);
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 28px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 10px 26px rgba(16, 185, 129, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ShareLink = styled.div`
  color: #16a34a;
  font-weight: 500;
  cursor: pointer;
`;

const ShareBtn = styled.button`
  background: transparent;
  border: none;
  color: #16a34a;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: right;
  padding-left: 50px;
`;

const CancelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const CancelBtn = styled.button`
  background: none;
  border: none;
  color: #16a34a;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
`;
