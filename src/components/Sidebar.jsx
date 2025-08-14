import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext.jsx";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <section
        className={`bg-[#131313] lg:px-20 px-10 flex flex-col pt w-[80%] h-full items-start md:h-auto md:w-[25%] lg:w-[25%] z-40 fixed md:relative transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col gap-9 md:gap-7 lg:gap-9 text-[#fff] font-glancyr text-[20px] md:text-[24px] lg:text-[26px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "font-bold" : "font-extralight"} hover:underline`
              }
              onClick={closeSidebar}
            >
              Welcome
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${isActive ? "font-bold" : "font-extralight"} hover:underline`
              }
              onClick={closeSidebar}
            >
              Work
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/background"
              className={({ isActive }) =>
                `${isActive ? "font-bold" : "font-extralight"} hover:underline`
              }
              onClick={closeSidebar}
            >
              Background
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reference"
              className={({ isActive }) =>
                `${isActive ? "font-bold" : "font-extralight"} hover:underline`
              }
              onClick={closeSidebar}
            >
              Reference
            </NavLink>
          </li>

          <li>
            <a
              href="mailto:kiitanolu@gmail.com"
              onClick={closeSidebar}
              className="w-20 text-center text-sm lg:text-base bg-[#FB6E02] py-4 px-4 md:px-4 font-semibold rounded-xl cursor-pointer"
            >
              Work With Me
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
