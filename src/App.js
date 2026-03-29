import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LightPage from "./pages/LightPage";
import GalleryPage from "./pages/GalleryPage";
import FinalPage from "./pages/FinalPage";
import Land from "./pages/Land";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/home" element={<Home />} />
        <Route path="/light" element={<LightPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;