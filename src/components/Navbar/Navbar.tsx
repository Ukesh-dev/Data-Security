import { useState, useEffect, useRef } from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data/NavbarData";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [offset, setOffset] = useState<boolean>(false);
  const [scroll, setScroll] = useState<{ scrollPos: number; display: boolean }>(
    {
      scrollPos: 0,
      display: true,
    }
  );
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setOffset(true);
    } else {
      setOffset(false);
    }
    setScroll({
      scrollPos: document.body.getBoundingClientRect().top,
      display: document.body.getBoundingClientRect().top > scroll.scrollPos,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  // const element = useRef<HTMLDivElement | null>(null);
  const scrollTo = (id: string) => {
    // if (id === "about") {
    //   element.current?.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }

    const element = document.getElementById(id)!;

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const closeMobileMenu = (to: string, id: string | undefined) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    } else {
      navigate(to);
    }

    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scroll={scroll} offsets={offset}>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon
              src="./assets/logo.png"
              alt="logo"
              style={{ fontWeight: "bold" }}
            />
            Shield
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el?.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
