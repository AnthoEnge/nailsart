import Accueil from "./pages/Accueil";
import Galerie from "./pages/Galerie";
import Reservation from "./pages/Reservation";
import Tarifs from "./pages/Tarifs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route activeClassName="active" path="/accueil" element={<Accueil />} />
        <Route activeClassName="active" path="/galerie" element={<Galerie />} />
        <Route
          activeClassName="active"
          path="/reservation"
          element={<Reservation />}
        />
        <Route activeClassName="active" path="/tarifs" element={<Tarifs />} />
        {/* Path =* fonctionne si il n'a aucune page déclarer au-dessus */}
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
