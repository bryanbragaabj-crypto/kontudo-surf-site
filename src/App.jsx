import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import ComoFunciona from "./pages/ComoFunciona";
import Faq from "./pages/Faq";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosUso />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    
    </BrowserRouter>
  );
}

export default App;
