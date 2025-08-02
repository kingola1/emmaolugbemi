import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext.jsx";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <section className={`bg-[#131313] pl-10 lg:pl-20 flex flex-col w-[80%] sm:w-[60%] h-full items-start md:h-auto md:w-[25%] lg:w-[25%] z-40 mt-20 fixed md:relative transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
      <ul className="flex flex-col gap-5 md:gap-7 lg:gap-9 py-5 text-[#fff] font-glancyr text-[20px] md:text-[24px] lg:text-[26px]">
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

        <li className="font-bold flex items-center text-center text-sm lg:text-base bg-[#FB6E02] w-auto px-3 lg:px-5 py-2 rounded-xl ">
          <a href="/" onClick={closeSidebar}>Work With Me</a>
        </li>
      </ul>
      </section>
    </>
  );
};

export default Sidebar;
