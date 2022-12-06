import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import "./styles.scss";
import { ReactComponent as Logo } from "../../assets/logo-mulvi.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [expand, setExpand] = useState(true);
  const [benefitsActive, setBenefitsActive] = useState(false);
  const [rateActive, setRateActive] = useState(false);
  const [solutionsActive, setSolutionsActive] = useState(false);
  const [contentsActive, setContentsActive] = useState(false);
  const [faqActive, setFaqActive] = useState(false);
  const [whoWeAreActive, setWhoWeAreActive] = useState(false);

  const toggle = () => {
    if (!expand) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickMenu = (menu: string) => {
    if (id) {
      window.location.href = "/";
    } else {
      if (menu === "benefits") {
        setBenefitsActive(true);
        setRateActive(false);
        setSolutionsActive(false);
        setContentsActive(false);
        setFaqActive(false);
        setWhoWeAreActive(false);
      } else if (menu === "rate") {
        setRateActive(true);
        setBenefitsActive(false);
        setSolutionsActive(false);
        setContentsActive(false);
        setFaqActive(false);
        setWhoWeAreActive(false);
      } else if (menu === "solutions") {
        setSolutionsActive(true);
        setBenefitsActive(false);
        setRateActive(false);
        setContentsActive(false);
        setFaqActive(false);
        setWhoWeAreActive(false);
      } else if (menu === "contents") {
        setContentsActive(true);
        setRateActive(false);
        setSolutionsActive(false);
        setBenefitsActive(false);
        setFaqActive(false);
        setWhoWeAreActive(false);
      } else if (menu === "faq") {
        setFaqActive(true);
        setRateActive(false);
        setSolutionsActive(false);
        setBenefitsActive(false);
        setContentsActive(false);
        setWhoWeAreActive(false);
      } else if (menu === "whoWeAre") {
        setWhoWeAreActive(true);
        setRateActive(false);
        setSolutionsActive(false);
        setBenefitsActive(false);
        setContentsActive(false);
        setFaqActive(false);
      }
    }
  };

  useEffect(() => {
    let widthResizing;
    function handleResize() {
      widthResizing = window.innerWidth;

      if (widthResizing <= 1439) {
        setExpand(false);
      } else {
        setExpand(true);
        setIsOpen(false);
      }
    }

    var lastScroll = 0;
    function handleScroll() {
      const scrollY = window.scrollY;
      var scrollTop = document.documentElement.scrollTop;
      const menu = document.querySelector("#top");
      let benefitsHeight = 0;
      let rateHeight = 0;
      let solutionsHeight = 0;
      let contentsHeight = 0;
      let faqHeight = 0;
      let whoWeAreHeight = 0;

      if (expand && !id) {
        benefitsHeight = document.querySelector("#benefits")!.clientHeight;
        rateHeight = document.querySelector("#rate")!.clientHeight;
        solutionsHeight = document.querySelector("#solutions")!.clientHeight;
        contentsHeight = document.querySelector("#contents")!.clientHeight;
        faqHeight = document.querySelector("#faq")!.clientHeight;
        whoWeAreHeight = document.querySelector("#whoWeAre")!.clientHeight;
      }

      if (scrollY !== 0 && !isOpen) {
        if (scrollTop > lastScroll) {
          menu?.classList.add("d-none");
          menu?.classList.remove("add-background");
          setIsOpen(false);
        } else {
          menu?.classList.add("add-background");
          menu?.classList.remove("d-none");
        }
        if (expand && !id) {
          if (scrollY >= 700 && scrollY <= 700 + benefitsHeight) {
            setBenefitsActive(true);
            setRateActive(false);
            setSolutionsActive(false);
            setContentsActive(false);
            setFaqActive(false);
            setWhoWeAreActive(false);
          } else if (
            scrollY > 700 + benefitsHeight &&
            scrollY <= 700 + benefitsHeight + rateHeight
          ) {
            setRateActive(true);
            setBenefitsActive(false);
            setSolutionsActive(false);
            setContentsActive(false);
            setFaqActive(false);
            setWhoWeAreActive(false);
          } else if (
            scrollY > 700 + benefitsHeight + rateHeight &&
            scrollY <= 700 + benefitsHeight + rateHeight + solutionsHeight
          ) {
            setSolutionsActive(true);
            setBenefitsActive(false);
            setRateActive(false);
            setContentsActive(false);
            setFaqActive(false);
            setWhoWeAreActive(false);
          } else if (
            scrollY > 700 + benefitsHeight + rateHeight + solutionsHeight &&
            scrollY <=
              700 +
                benefitsHeight +
                rateHeight +
                solutionsHeight +
                contentsHeight
          ) {
            setContentsActive(true);
            setRateActive(false);
            setSolutionsActive(false);
            setBenefitsActive(false);
            setFaqActive(false);
            setWhoWeAreActive(false);
          } else if (
            scrollY >
              700 +
                benefitsHeight +
                rateHeight +
                solutionsHeight +
                contentsHeight &&
            scrollY <=
              700 +
                benefitsHeight +
                rateHeight +
                solutionsHeight +
                contentsHeight +
                faqHeight
          ) {
            setFaqActive(true);
            setRateActive(false);
            setSolutionsActive(false);
            setBenefitsActive(false);
            setContentsActive(false);
            setWhoWeAreActive(false);
          } else if (
            scrollY >
              700 +
                benefitsHeight +
                rateHeight +
                solutionsHeight +
                contentsHeight +
                faqHeight &&
            scrollY <=
              800 +
                benefitsHeight +
                rateHeight +
                solutionsHeight +
                contentsHeight +
                faqHeight +
                whoWeAreHeight
          ) {
            setWhoWeAreActive(true);
            setRateActive(false);
            setSolutionsActive(false);
            setBenefitsActive(false);
            setContentsActive(false);
            setFaqActive(false);
          } else {
            setWhoWeAreActive(false);
            setRateActive(false);
            setSolutionsActive(false);
            setBenefitsActive(false);
            setContentsActive(false);
            setFaqActive(false);
          }
        }
      }
      lastScroll = scrollTop <= 0 ? 0 : scrollTop;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <Navbar
      expand={expand}
      fixed={"top"}
      className={`container-web ${isOpen ? "menu-open" : "menu-close"}`}
      id="top"
    >
      <NavbarBrand href="/">
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem onClick={toggle}>
            <NavLink
              href="#benefits"
              className={`link-menu ${benefitsActive ? "active" : ""}`}
              onClick={() => handleClickMenu("benefits")}
            >
              Vantagens
            </NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink
              href="#rate"
              className={`link-menu ${rateActive ? "active" : ""}`}
              onClick={() => handleClickMenu("rate")}
            >
              Taxas
            </NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink
              href="#solutions"
              className={`link-menu ${solutionsActive ? "active" : ""}`}
              onClick={() => handleClickMenu("solutions")}
            >
              Soluções
            </NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink
              href="#contents"
              className={`link-menu ${contentsActive ? "active" : ""}`}
              onClick={() => handleClickMenu("contents")}
            >
              Conteúdos
            </NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink
              href="#faq"
              className={`link-menu ${faqActive ? "active" : ""}`}
              onClick={() => handleClickMenu("faq")}
            >
              Perguntas Frequentes
            </NavLink>
          </NavItem>
          <NavItem className="whoWeAre" onClick={toggle}>
            <NavLink
              href="#whoWeAre"
              className={`link-menu ${whoWeAreActive ? "active" : ""}`}
              onClick={() => handleClickMenu("whoWeAre")}
            >
              Quem Somos
            </NavLink>
          </NavItem>
          <NavItem className="my-account" onClick={toggle}>
            <NavLink href="https://app.mulvipay.com.br/PortalLojista3/LoginMulvi">
              Minha conta
            </NavLink>
          </NavItem>
          <NavItem className="be-mulvi" onClick={toggle}>
            <NavLink href="https://app.mulvipay.com.br/PortalLojista3/querosercliente">
              Quero ser mulvi
            </NavLink>
          </NavItem>
        </Nav>
        {isOpen && (
          <div className="menu-icon">
            <MenuIcon />
          </div>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Menu;
