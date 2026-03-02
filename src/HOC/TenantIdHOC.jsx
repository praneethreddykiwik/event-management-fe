import { useLocation } from "react-router-dom";
// import {
//   StyledAnchor,
//   StyledGrayLink,
//   StyledHeading,
//   StyledParagraph,
// } from "../components/Styled/Typography.styled";
// import useTenant from "../hooks/useTenant.hook";
import { useEffect } from "react";

export const TenantIdHOC = (props) => {
  // const tenantId = useTenant();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (!params.has("tenantId")) {
      params.set("tenantId", "helm");

      const newUrl = window.location.pathname + "?" + params.toString();

      window.history.replaceState(null, "", newUrl);
    }
  }, [location.search]);

  // if (!tenantId)
  //   return (
  //     <div>
  //       <StyledHeading>Tenant ID is missing in url!</StyledHeading>
  //       <StyledParagraph>
  //         Please add the Tenant ID as shown below
  //       </StyledParagraph>
  //       <StyledParagraph>
  //         Example: https://my-application.com
  //         <StyledGrayLink>?tenantId=MyTenant</StyledGrayLink>
  //       </StyledParagraph>
  //     </div>
  //   );
  return <>{props.children}</>;
};
