import React from "react";
import { ReactComponent as Logo } from "../../assets/22116270_1114.svg";
import "./NavBarStyles.css";

const NavBar = () => {
  if (window.innerWidth >= 1000) {
    // let lastScroll: number = 0;
    // const body = document.body;

    window.addEventListener("scroll", function () {
      const scrollTop: number = window.scrollY;
      // const currentScroll: number = window.pageYOffset;

      const navContainer: HTMLElement | null =
        document.querySelector(".nav-container");

      if (navContainer) {
        const navContainerHeight: number = navContainer.clientHeight;

        const scrollFraction: number = scrollTop / (navContainerHeight * 0.1); // Adjust multiplier as needed
        navContainer.style.transform = `translateY(-${scrollFraction * 150}%)`;
      }

      // if (currentScroll < lastScroll && !body.classList.contains("scroll-up")) {
      //   body.classList.add("scroll-up");
      // }

      // if (currentScroll > lastScroll && body.classList.contains("scroll-up")) {
      //   body.classList.remove("scroll-up");
      // }

      // lastScroll = currentScroll;
    });
  }

  return (
    <div className="nav-container ">
      <div className="nav_container_box">
        <div className="nav-container_logo-box">
          <div className="logo-box_logo">
            <Logo className="logo" />
          </div>
        </div>
        <nav className="nav-container_menu-box">
          <ul className="menu-nav">
            <li className="menu-item">Services</li>
            <li className="menu-item">Our Work</li>
            <li className="menu-item">
              <span>Career</span>
              <span className="menu-item_token">6</span>
            </li>
            <li className="menu-item">Blog</li>
            <li className="menu-item">About Us</li>
            <li className="menu-item">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
