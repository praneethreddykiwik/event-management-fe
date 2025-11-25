import styled from "styled-components";
import BG1Image from "../../assets/Profile_images/BG1Image.jpg";



export const StyleMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 130px;
  gap: 40px;
  background-image: url(${BG1Image});
  background-size: 100% 33%;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #eef7fc;

  @media (max-width: 1200px) {
    padding: 80px;
    gap: 25px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 50px 20px;
    background-image: none;      
    background-color: transparent;;   
    background-size: auto;       

  }

  @media (max-width: 600px) {
    padding: 40px 15px;
    gap: 15px;
    background-image: none;       
    background-color: transparent;;
  }
`;




export const StyleSpan = styled.span`
`;

export const StyleLeftCard = styled.div`
  width: 300px;
  max-width: 100%;   
  background: white;
  padding: 25px 20px;
  margin-top: 70px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
`;


export const StyleProfileImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyleProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const StyleEditIconCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #2ecc71;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .material-icons {
    color: white;
    font-size: 16px;
  }
`;

export const StyleUserName = styled.h2``;
export const StyleUserRole = styled.p``;

export const StyleUserLocation = styled.p`
  margin: 10px 0 20px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
`;
export const StyleEditProfileWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
   button {
    width: 230px;       
  }
`;

export const StyleEditProfileButton = styled.button`
  background: none;
  border: none;
  padding: 6px 60px;
  color: #ddd;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyleActivitiesBox = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  margin-top: 10px;
`;

export const StyleHeadingside = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const StyleActivityRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  color: #666;
`;

export const StyleViewMoreButton = styled.button`
  margin-top: 10px;
  font-size: 20px;
  padding: 7px 15px;
  background: white;
  border: none;
`;

export const StyleJoinedDate = styled.p`
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
`;

export const StyleHelpIconCircle = styled.span`
  color: #19183aff;
  background: none;
  font-size: 18px;
`;



export const StyleRightForm = styled.div`
  margin-top: 249px;
  flex: 1;
  text-align: left;
  background: white;
  padding: 20px;
  border-radius: 1px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    margin-top: 180px;
  }

  @media (max-width: 900px) {
    margin-top: 30px;
    width: 100%;
  }
`;


export const StyleProfileTitle = styled.h2`
  margin: 10px 30px;
`;

export const StyleProfileSubtitle = styled.p`
  margin: 10px 30px;
  color: #666;
`;

export const StyleProfileImageLarge = styled.img`
  width: 110px;
  height: 110px;
  margin: 10px 30px;
  border-radius: 50%;
`;

export const StyleNameRow = styled.div`
  display: flex;
  gap: 120px;
  margin-bottom: 20px;
  border-bottom: 1px solid #8c8c8c;
  padding: 60px 20px 20px 20px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px;
  }
`;


export const StyleInputBox = styled.input`
  width: 100%;
  padding: 10px 1px 10px 10px;
  border-radius: 24px;
  border: 2px solid #ccc;
`;

export const StyleFlextable = styled.label`
  color: #8c8c8c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #8c8c8c;
  padding: 40px 20px;
`;

export const StyleLabels = styled.div``;

export const StyleDescribetext = styled.div`
  width: 70%;
  color: #8c8c8c;

  @media (max-width: 900px) {
    width: 100%;
  }
`;


export const StylePasswordRow = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 20px;
  border-bottom: 1px solid #a9a7a7ff;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;


export const StyleEmailRow = styled.div`
  position: relative;
  width: 490px;

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;


export const StyleEditIconEmail = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #21bc67ff;
  cursor: pointer;
`;
