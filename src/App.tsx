import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

// IMPORTAMOS NUESTRO COMPONENTE MANUAL
import { SEO } from "./components/SEO";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { AllNewsPage } from "./components/AllNewsPage";
import {
  AvisoLegal,
  PoliticaPrivacidad,
  PoliticaCookies,
} from "./pages/LegalPages";

const App: React.FC = () => {
  return (
    <Router>
      <main className="w-full min-h-screen bg-slate-950">
        <Navbar />

        <Routes>
          {/* RUTA: PORTADA (HOME) */}
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="CV Noáin | Escuela y Competición en Navarra"
                  description="Web oficial del Club Voleibol Noáin. Formación, escuela deportiva y equipos de competición en Noáin, Navarra. Pasión y familia."
                />
                <Home />
              </>
            }
          />

          {/* RUTA: TODAS LAS NOTICIAS */}
          <Route
            path="/noticias"
            element={
              <>
                <SEO
                  title="Noticias"
                  description="Últimas novedades, resultados y eventos del Club Voleibol Noáin."
                />
                <AllNewsPage />
              </>
            }
          />

          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/cookies" element={<PoliticaCookies />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
