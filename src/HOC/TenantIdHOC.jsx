import {
  StyledAnchor,
  StyledGrayLink,
  StyledHeading,
  StyledParagraph,
} from "../components/Styled/Typography.styled";
import useTenant from "../hooks/useTenant.hook";

export const TenantIdHOC = (props) => {
  const tenantId = useTenant();
  if (!tenantId)
    return (
      <div>
        <StyledHeading>Tenant ID is missing in url!</StyledHeading>
        <StyledParagraph>
          Please add the Tenant ID as shown below
        </StyledParagraph>
        <StyledParagraph>
          Example: https://my-application.com
          <StyledGrayLink>?tenantId=MyTenant</StyledGrayLink>
        </StyledParagraph>
      </div>
    );
  return <>{props.children}</>;
};
