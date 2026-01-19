import React from "react";
import { NavLink } from "react-router";
import { SocialIcon } from "react-social-icons";
import Logo from "../Logo/Logo";
const Footer = () => {
  const navItems = (
    <div className="flex lg:flex-row flex-col items-center justify-center font-semibold gap-5 text-[15px]">
      <li>
        <NavLink>Services</NavLink>{" "}
      </li>
      <li>
        <NavLink>Coverage</NavLink>{" "}
      </li>
      <li>
        <NavLink>About Us</NavLink>{" "}
      </li>
      <li>
        <NavLink>Pricing</NavLink>{" "}
      </li>
      <li>
        <NavLink>Blog</NavLink>{" "}
      </li>
      <li>
        <NavLink>Contact</NavLink>{" "}
      </li>
    </div>
  );
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
        <div className="mx-auto">
          <div className=" font-bold flex flex-row items-center justify-center">
            <div className="relative right-10">
              {/* logo */}
              <Logo></Logo>
            </div>
          </div>
          <p className="my-3 text-center w-[70%]">
            Enjoy fast, reliable parcel delivery with real-time traking and zero
            hassale. From personal packages to business shipments - we deliver
            on time, every time
          </p>
          <div className="border-y py-5 w-full border-dashed border-white mx-auto">
            <ul>{navItems}</ul>
          </div>
          {/* icons */}
          <div className="flex flex-row justify-center items-center gap-5 my-5">
            <SocialIcon url="https://linkedin.com/in/couetilc" />
            <SocialIcon url="https://x.com/in/couetilc" />
            <SocialIcon url="https://facebook.com/in/couetilc" />
            <SocialIcon url="https://youtube.com/in/couetilc" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
