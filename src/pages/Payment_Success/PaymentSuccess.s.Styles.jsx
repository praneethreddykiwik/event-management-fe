import styled from "styled-components";


export const Styledb = styled.b`
font-weight: 500;`;

export const Stylespan = styled.span`
`;

export const Stylespan2 = styled.span`
  color: #16a34a;
 `;

export const StyledPage = styled.div`
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
  background: #eef8fc;
  min-height: 100vh;
  color: #222;
  padding: 36px 16px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 28px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;


export const LeftCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  padding: 35px;
  width: 550px;
  box-sizing: border-box;
`;

export const StyledHeading = styled.h3`
  text-align: center;
  color: #1a1a1dff;
  margin: 0 0 6px 0;
  font-weight: 500;
  font-size: 18px;
`;

export const StyledPara = styled.p`
  text-align: center;
  color: #6b7280;
  margin: 0 0 14px 0;
  font-size: 13px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #bdc0c4ff;;
  margin: 14px 1px;
`;

export const Summary = styled.div``;

export const SummaryTitle = styled.h4`
  font-weight: 600;
  margin: 0 0 1px 50px;
  color: #111827;
  display: flex;
`;

export const StRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 50px;
  color: #697991ff;
  font-size: 14px;
`;

export const InsuranceRow = styled(StRow)`
  align-items: center;
  gap: 12px;
`;

export const TotalRow = styled(StRow)`
  span:last-child {
    color: #2e1d5aff;
    font-weight: 500;
  }
`;

export const InfoButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: #6b7280;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    background: rgba(15, 23, 42, 0.03);
  }

  svg {
    display: block;
  }
`;

export const ToggleSwitch = styled.div`
  width: 44px;
  height: 26px;
  border-radius: 20px;
  background: #696d71ff;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  }
`;

export const Promo = styled.div`
  text-align: center;
  margin-top: 40px;
  color: #16a34a;
  
`;

export const PromoTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const PromoInput = styled.div`
  display: inline-flex;
  gap: 10px;
  margin-top: 20px;
`;

export const PromoField = styled.input`
  border: 1px solid #bdc0c4ff;
  padding: 10px 12px;
  border-radius: 4px;
  outline: none;
  width: 220px;
  background: #fbfdff;
`;

export const Terms = styled.p`
  font-size: 13px;
  text-align: center;
  color: #6b7280;
  margin-top: 22px;
  margin: 30px;
  line-height: 1.45;
  text-align: justify;
  
`;

export const Stylebr = styled.br``;

export const HighlightText  = styled.span`
  color: #1f4bd8;
  text-decoration: underline;
`;


export const RightCard = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 8px 30px rgba(24, 39, 75, 0.06);
  width: 450px;
  padding: 0 18px 26px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 711px;
`;

export const EventImage = styled.img`
  width: 109%;
  height: 180px;
  object-fit: cover;
  border-radius: 0px;
  margin-top: 0;
`;

export const VenueCard = styled.div`
  width: calc(100% - 24px);
  background: #fff;
  border-radius: 1px;
  padding: 18px;
  margin-top: -44px;
  box-shadow: 0 8px 22px rgba(20, 32, 80, 0.06);
  text-align: center;
`;

export const VenueTitle = styled.h3`
  margin: 6px 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`;

export const VenueAddress = styled.p`
  margin: 0;
  font-size: 12.5px;
  color: #6b7280;
  line-height: 1.3;
`;

export const SuccessBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 16px;
  color: #16a34a;
  border-radius: 999px;
  margin-top: 6px;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.06);
  background: #fff;
`;

export const BadgeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.12);
  border-radius: 999px;
  padding: 6px;
  color: #16a34a;
`;

export const DetailsCard = styled.div`
  width: calc(100% - 24px);
  background: #fff;
  border-radius: 1px;
  padding: 16px;
  margin-top: 18px;
  box-shadow: 0 8px 22px rgba(20, 32, 80, 0.06);
  text-align: left;
`;

export const DetailsTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 700;
  color: #111827;
`;

export const DashedDivider = styled.hr`
  border: none;
  border-top: 1px dashed #bdc0c4ff;
  margin: 10px 0;
`;

export const Value = styled.span`
  font-weight: 600;
  color: #111827;
  font-size: 13px;
`;

export const Amount = styled(Value)`
  color: #111827;
`;

export const ButtonGroup = styled.div`
  width: calc(100% - 24px);
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: center;
  margin-top: 20px;
`;

export const DownloadCard = styled.div`
  flex: 0 0 260px;
  background: transparent;
  padding: 37px;
`;

export const DownloadBtn = styled.button`
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

export const ShareLink = styled.div`
  color: #16a34a;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  gap: 6px;
`;

export const ShareBtn = styled.button`
  background: transparent;
  border: none;
  color: #16a34a;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: right;
`;

export const CancelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const CancelBtn = styled.button`
  background: none;
  border: none;
  color: #16a34a;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
`;