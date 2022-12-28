import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    // <Wrapper>
    <div className=" flex justify-center items-center relative">
      {isVisible && (
        <div
          className="w-10 h-10 bg-gradient-to-b from-gray-300 to-gray-500 rounded-[50%] fixed bottom-5 right-6 lg:bottom-12 lg:right-14  z-[999] flex justify-center items-center cursor-pointer"
          onClick={goToBtn}
        >
          <FaArrowUp className="animate-bounce" />
        </div>
      )}
    </div>
    // </Wrapper>
  );
};
export default GotoTop;
