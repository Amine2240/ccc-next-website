import React, { useEffect } from "react";
import { useState } from "react";
import MobileNavBar from "./mobile_navbar/index";
import DesktopNavBar from "./desktop_navbar/index";

const Index = () => {
  const [navbarbool, setnavbarbool] = useState(true);
  const navbar_items = [
    {
      id: 0,
      link: "/#home",
      label: "home",
    },
    {
      id: 1,
      link: "/#about",
      label: "about",
    },
    {
      id: 2,
      link: "/#whyccc",
      label: "why CCC?",
    },
    {
      id: 3,
      link: "/#agenda",
      label: "agenda",
    },
    {
      id: 4,
      link: "/#faq",
      label: "FAQ",
    },
  ];
  return (
    <>
      <DesktopNavBar
        navbar_items={navbar_items}
        navbarbool={navbarbool}
        setnavbarbool={setnavbarbool}
      />
      {<MobileNavBar navbar_items={navbar_items} navbarbool={navbarbool} />}
    </>
  );
};

export default Index;
