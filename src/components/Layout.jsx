import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const Location = useLocation();

  const sideBarRoutes = ["/", "/work", "/background", "/reference"];

  const sideBarOnLarge = sideBarRoutes.includes(location.pathname);

  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <Header />

      <div className="flex w-full md:mt-26 mt-24">
        <div className={`${sideBarOnLarge ? "lg:flex" : "lg:hidden"}`}>
          <Sidebar />
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </section>
  );
};

export default Layout;
