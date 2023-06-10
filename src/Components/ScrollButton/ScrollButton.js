import React, { useState } from "react";

import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <button
        className="alazea1-btn"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />        <i class="fa-solid fa-chevron-up"></i>
    </Button>
  );
};

export default ScrollButton;
