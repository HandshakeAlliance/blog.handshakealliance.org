import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavBar, breakpoint } from "@urkellabs/ucl";

const NavLinkItem = styled(NavBar.Item)`
  justify-content: center;

  ${breakpoint.upToDesktop} {
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 2.5vw;

    ${NavBar.Link} {
      padding-left: 0;
    }
  }
`;

export default function Navigation() {
  const [mobileNav, updateMobileNav] = useState(false);
  return (
    <NavBar>
      <NavBar.Container>
        {/* Put items you want to ALWAYS be visible (even on mobile) here */}
        <NavBar.Brand>
          <NavLinkItem as={Link} to={"/"}>
            Home
          </NavLinkItem>
          <NavBar.Burger
            active={mobileNav}
            onClick={() => updateMobileNav(active => !active)}
          />
        </NavBar.Brand>
        {/* Put items you want to HIDE on mobile when the navigation hidden here */}
        <NavBar.Menu active={mobileNav}>
          {/* Put NavbarItems here that you wish to be on the LEFT side of the navigation */}
          <NavBar.Start>
            <NavLinkItem as={Link} to={"/"}>
              Test (Start)
            </NavLinkItem>
          </NavBar.Start>
          {/* Put NavbarItems here that you wish to be on the RIGHT side of the navigation */}
          <NavBar.End>
            <NavLinkItem as={Link} to={"/"}>
              Test (End)
            </NavLinkItem>
          </NavBar.End>
        </NavBar.Menu>
      </NavBar.Container>
    </NavBar>
  );
}
