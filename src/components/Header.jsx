import EmailIcon from "../assets/email.svg";
import InstagramIcon from "../assets/instagram.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import MenuIcon from "../assets/menu.svg";
import XIcon from "../assets/x.svg";
import { useSidebar } from "../context/SidebarContext.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    } else {
      navigate(-1);
    }
  };

  return (
    <section className="bg-[#131313] fixed z-50 lg:px-20 px-10 py-8 flex w-full h-auto justify-between font-glancyr">
      <div>
        <img
          src={MenuIcon}
          alt="menu icon"
          className="w-[30px] h-auto cursor-pointer"
          onClick={handleMenuClick}
        />
      </div>

      <div className="flex gap-4 ">
        <a href="mailto:kiitanolu@gmail.com">
          <img src={EmailIcon} alt="Email Icon" className="w-[32px] h-auto" />
        </a>
        <a href="https://www.linkedin.com/in/emmaolugbemi">
          <img
            src={LinkedInIcon}
            alt=" Linkedin Icon"
            className="w-[32px] h-auto"
          />
        </a>
        <a href="https://www.instagram.com/emmaolugbemi">
          <img
            src={InstagramIcon}
            alt=" Instagram Icon"
            className="w-[32px] h-auto"
          />
        </a>
        <a href="https://x.com/EmmaOlugbemi">
          <img src={XIcon} alt="X Icon" className="w-[32px] h-auto" />
        </a>
      </div>
    </section>
  );
};

export default Header;
