import React from 'react';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "react-use";
const Scrollup = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

 const scrollToTop =()=> window.scrollTo({top:0, behavior:"smooth" })

  if (!visible) {
    return false;
  }
  return (
    <>
      <div className="scrollup" onClick={scrollToTop}>
        <h3>
          <FontAwesomeIcon icon={faChevronDown} />
        </h3>
      </div>
    </>
  );
};
export default Scrollup;
