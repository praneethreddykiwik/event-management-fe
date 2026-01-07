// get started texts

export const GETSTARTED_TXT = {
  MAIN_HEADING: "Book Your Perfect Event, Anytime, Anywhere!",

  MAIN_PARAGRAPH:
    "Looking for perfect place to host your next event? got you covered. Browse, compare, and book thousands of venues across the country in minutes. No hassle, no hidden fees, no stress. Just find your dream venue and let us handle the rest.",

  //buttons text
  START_BTN: "Get started",
  OUTLINE_BTN: "Explore",
};

// find inspiration texts

export const FINDINSIPRATION_TXT = {
  FIND_HEADING: "Seamless Events, Unforgettable Venue",

  FIND_PARAGRAPH:
    " Experience the convenience on our wedsite. Effortlessly explore a wide range of events that match your interests, while also having the ability to create and manage your own events seamlessly. Find inspiration, connect with others, and make every event a success, all in one place.",

  //buttons text
  FINDOUTLINE_BTN: "Find inspiration",
};

// join now component text

export const JOINCOMPONENT_TXT = {
  JOIN_PARAGRAPH: (
    <>
      Experience the convenience on our wedsite today and discover how easy it
      is to plan your <br /> events with us
    </>
  ),

  JOIN_HEADING: "There is a venue for every event",

  //buttons text
  JOIN_BTN: "Join now",
};

// experience component text

export const EXPERIENCECOMPONET_TXT = {
  EXPERIENCE_HEADING1: "Unforgettable Experiences",
  EXPERIENCE_HEADING2: "Seamless Connection",
  EXPERIENCE_HEADING3: "Features that make us best in the business",
  EXPERIENCE_HEADING4: "Anytime, Anywhere ",
  EXPERIENCE_PARA1:
    "  We strive to create memorable experiences by offering a diverse selection of venues and services to cater to every event need.",
  EXPERIENCE_PARA2:
    "  We strive to ensure a smooth and hassle-free booking process, connecting users with a wide range of event venues and services.",
  EXPERIENCE_PARA3:
    " You have flexibility to browse and book venues at your convenience, from anywhere, at any time, using your mobile devices.",
};

// customer component text

export const CUSTOMERCOMPONET_TXT = {
  CUSTOMER_HEADING: "What our customers are saying",

  CUSTOMER_PARA:
    "I recently used the online event and venue booking service, and it exceeded my expectations. The entire booking process was incredibly smooth, and I was able to find the perfect venue for my event without any hassle.",

  PROFILE_NAME: "Cameron Wiliamson",

  PROFILE_LINK: "Pictoplasma Conference",

  // FOR MOBILE HEADING
  CUSTOMER_HEADINGM: "What our customers are saying",
};

// book venue component text
import styled from "styled-components";
import { StyledGrayLink } from "../components/Styled/Typography.styled";
const StyledAnchor = styled(StyledGrayLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const BOOKCOMPONENT_TXT = {
  BOOK_HEADING: "Get updated when your favorite venue is open for booking.",

  BOOK_PARA:
    " Join our email list to resceive updates on events near you, booking and appointment availabilty tips on great event planning, management and more.",

  //buttons text
  BOOK_BTN: "Notify when available",

  BOOK_POLICY: (
    <>
      *Please refer to our <StyledAnchor>Privacy Policy</StyledAnchor> for more
      details.
    </>
  ),
};

export const TRUSTEDCOMPONENT_TXT = {
  JOIN_HEADING: "Trusted By",
};
