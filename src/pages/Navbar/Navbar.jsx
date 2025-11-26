import React, { useState } from "react";
import styled from "styled-components";
import nav_img from "../../assets/nav_bar_img/nav_img.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LeftSection>

        <Hamburger onClick={() => setOpen(!open)}>
          <Stylespan></Stylespan>
          <Stylespan></Stylespan>
          <Stylespan></Stylespan>
        </Hamburger>

      
      <MobileMenu open={open}>
        <MobileItem>Home </MobileItem>
        <MobileItem>Events</MobileItem>
        <MobileItem>Venues</MobileItem>
      </MobileMenu>
      
        <LogoWrapper>
          <LogoIcon className="material-icons">diamond</LogoIcon>
          <LogoText>eventz</LogoText>
        </LogoWrapper>

       
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Events <Stylespan className="material-icons">expand_more</Stylespan></MenuItem>
          <MenuItem>Venues <Stylespan className="material-icons">expand_more</Stylespan></MenuItem>
        </Menu>
      </LeftSection>

      
      <RightSection>
        <IconWrapper><Stylespan className="material-icons">search</Stylespan></IconWrapper>
        <IconWrapper><Stylespan className="material-icons">language</Stylespan></IconWrapper>
        <IconWrapper><Stylespan className="material-icons">notifications</Stylespan></IconWrapper>

        <Navimg src={nav_img} alt="profile" />
      </RightSection>
    </Nav>
  );
};

export default Navbar;


const Stylespan = styled.span``;

const Nav = styled.nav`
  width: 100%;
  padding: 14px 36px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

const LogoIcon = styled.span`
  color: #16a34a;
  font-size: 34px;
`;

const LogoText = styled.h2`
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  color: #222;
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const IconWrapper = styled.div`
  cursor: pointer;

  span {
    font-size: 22px;
    color: #333;
  }
`;

const Navimg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
`;


const Hamburger = styled.div`
  display: none;
 
  

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    margin-right: 10px;
  }

  span {
    width: 23px;
    height: 3px;
    background: #333;
    border-radius: 3px;
  }
`;


const MobileMenu = styled.ul`
  position: absolute;
  top: 64px;          
  left: 0;            
  width: 100%;        
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.open ? "block" : "none")};
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileItem = styled.li`
  padding: 
`;