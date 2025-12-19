import { StyledLinkIcon } from "../../components/Styled/AccountSettings.styled";
import {
  HEADINGS,
  TEXTS,
  SETTINGS_LABELS,
} from "../../enum/accountsettings.common";

export const sections = [
  {
    heading: HEADINGS.LINKED_ACCOUNTS,
    link: { text: "+ Add" },
    content: "Google",
  },
  {
    heading: HEADINGS.EMAIL_PREFERENCE,
    link: {
      text: (
        <>
          <StyledLinkIcon>
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>autorenew</span>
          </StyledLinkIcon>
          Update
        </>
      ),
    },
    content: TEXTS.EMAIL_PREFERENCE,
  },
  {
    heading: HEADINGS.BACKUP,
    content: TEXTS.BACKUP,
  },
];

// Array config for mapping
export const SettingOptions = [
    { name: "blockAdult", label: SETTINGS_LABELS.BLOCK_ADULT },
    { name: "optOutRecommendations", label: SETTINGS_LABELS.OPT_OUT_RECOMMENDATIONS },
    { name: "noSearchIndex", label: SETTINGS_LABELS.NO_SEARCH_INDEX },
    { name: "autoUpdate", label: SETTINGS_LABELS.AUTO_UPDATE },
  ];