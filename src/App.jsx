import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Work from "./pages/Work.jsx";
// import Background from "./pages/Background.jsx";
// import Reference from "./pages/Reference.jsx";
// import BloomCreativeHub from "./pages/BloomCreativeHub.jsx";
// import ActCon from "./pages/ActCon.jsx";
// import SpecialYF from "./pages/SpecialYF.jsx";
// import Viano from "./pages/Viano.jsx";
// import GodsDreamerGirl from "./pages/GodsDreamerGirl.jsx";
// import DailyTrust from "./pages/DailyTrust.jsx";
// import LMUN from "./pages/LMUN.jsx";
// import DesignedToDream from "./pages/DesignedToDream.jsx";
// import PhotoManipulations from "./pages/PhotoManipulations.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Background = lazy(() => import("./pages/Background"));
const Reference = lazy(() => import("./pages/Reference"));
const BloomCreativeHub = lazy(() => import("./pages/BloomCreativeHub"));
const ActCon = lazy(() => import("./pages/ActCon"));
const SpecialYF = lazy(() => import("./pages/SpecialYF"));
const Viano = lazy(() => import("./pages/Viano"));
const GodsDreamerGirl = lazy(() => import("./pages/GodsDreamerGirl"));
const DailyTrust = lazy(() => import("./pages/DailyTrust"));
const LMUN = lazy(() => import("./pages/LMUN"));
const DesignedToDream = lazy(() => import("./pages/DesignedToDream"));
const PhotoManipulations = lazy(() => import("./pages/PhotoManipulations"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/background" element={<Background />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/bloomcreativehub" element={<BloomCreativeHub />} />
        <Route path="/actcon" element={<ActCon />} />
        <Route path="/specialyf" element={<SpecialYF />} />
        <Route path="/viano" element={<Viano />} />
        <Route path="/godsdreamergirl" element={<GodsDreamerGirl />} />
        <Route path="/dailytrust" element={<DailyTrust />} />
        <Route path="/lmun" element={<LMUN />} />
        <Route path="/designedtodream" element={<DesignedToDream />} />
        <Route path="/photomanipulations" element={<PhotoManipulations />} />
      </Routes>
    </>
  );
}

export default App;
