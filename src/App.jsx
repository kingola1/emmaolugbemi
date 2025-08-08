import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Background from "./pages/Background.jsx";
import Reference from "./pages/Reference.jsx";
import BloomCreativeHub from "./pages/BloomCreativeHub.jsx";
import ActCon from "./pages/ActCon.jsx";
import SpecialYF from "./pages/SpecialYF.jsx";
import Viano from "./pages/Viano.jsx";
import GodsDreamerGirl from "./pages/GodsDreamerGirl.jsx";
import DailyTrust from "./pages/DailyTrust.jsx";
import LMUN from "./pages/LMUN.jsx";
import DesignedToDream from "./pages/DesignedToDream.jsx";
import PhotoManipulations from "./pages/PhotoManipulations.jsx";

function App() {
  return (
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
  );
}

export default App;
