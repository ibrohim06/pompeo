import React from "react";
import logo from "../navbar/assets/Pompeo.svg";
import FooterContact from "./FooterContact";
import "./Footer.scss";
import Img from "../../componets/image/img";

function Footer() {
  const contact = [
    {
      id: 1,
      name: "email",
      logo: "fa-solid fa-envelope",
      text: "pompeopotery@gmail.com",
      link: "mailto:pompeopotery@gmail.com",
    },
    {
      id: 2,
      name: "find",
      logo: "fa-solid fa-location-dot",
      text: `Central Park, Manhattan New York, 1101`,
      link: "https://map.google.com",
    },
    {
      id: 3,
      name: "call",
      logo: "fa-solid fa-phone",
      text: "+1 292 345 678",
      link: "tel:+1 292 345 678",
    },
  ];
  return (
    <div className="footerSection container">
      <Img src={logo} />
      <div className="footerTitle">
        I have always striven to fix beauty in wood, stone, glass or pottery,
        that has been my creed.
      </div>
      <div className="footerContact">
        {contact.map((item) => (
          <FooterContact
            name={item.name}
            logo={item.logo}
            link={item.link}
            text={item.text}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
