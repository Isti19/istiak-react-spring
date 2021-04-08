import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../images/A-Logo.svg';

const Navbar = () => {
  //   const [scrollNav, setScrollNav] = useState(false);

  //   const changeNav = () => {
  //     if (window.scrollY >= 100) {
  //       setScrollNav(true);
  //     } else {
  //       setScrollNav(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener('scroll', changeNav);
  //   }, []);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Logo} alt="logo" />
          </NavLogo>

          {/* <MobileIcon>
            <MenuIcon />
          </MobileIcon> */}
          <NavMenu>
            <NavItem>
              <NavLinks to="/">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background: #fff;
  /* background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')}; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  /* margin-top: -100px; */
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  height: 100px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  /* margin-left: 24px; */
  cursor: pointer;
`;

const MobileIcon = styled.div``;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;
const NavItem = styled.li`
  height: 100px;
  display: flex;
  align-items: center;
`;

const NavLinks = styled(LinkScroll)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  /* height: 29px; */
  width: 100%;
  cursor: pointer;
  font-size: 24px;
`;

const NavBtn = styled.nav``;

const NavBtnLink = styled(LinkRouter)``;

// const Nav = styled.nav`
//   background: #000;
//   /* background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')}; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 150px;
//   /* margin-top: -100px; */
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;

//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
// `;

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   z-index: 1;
//   height: 100px;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// const NavLogo = styled(LinkRouter)`
//   display: flex;
//   justify-self: flex-start;
//   /* align-items: center; */
//   color: #fff;
//   font-weight: bold;
//   font-size: 1.5rem;
//   /* text-transform: uppercase; */

//   /* margin-left: 24px; */
//   cursor: pointer;
// `;

// // const NavLogo = styled.div`
// //   display: flex;
// //   justify-self: flex-start;
// //   align-items: center;
// //   color: #fff;
// //   font-weight: bold;
// //   font-size: 1.5rem;
// //   /* text-transform: uppercase; */
// //   text-decoration: none;
// //   margin-left: 24px;
// //   cursor: pointer;
// // `;

// const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: #fff;
//   }
// `;

// const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   margin-right: -22px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// const NavItem = styled.li`
//   height: 100px;
// `;

// const NavLinks = styled(LinkScroll)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   font-size: 24px;

//   &.active {
//     border-bottom: 3px solid #ff0040;
//   }
// `;

// const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavBtnLink = styled(LinkRouter)`
//   border-radius: 50px;
//   background: #ff0040;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #000;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #000;
//   }
// `;

export default Navbar;
