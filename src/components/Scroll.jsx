import { useState, useEffect } from "react";
import Scroll from "../assets/scroll.svg";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="cursor-pointer fixed right-5 md:top-[80%] top-[65%] -translate-y-1/2 lg:p-2 md:p-1 p-1 z-50"
          onClick={scrollTop}
        >
          <img
            src={Scroll}
            alt="arrow icon"
            className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
          />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
