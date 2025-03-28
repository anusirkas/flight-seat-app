import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightList from "./pages/FlightList";
import Preferences from "./pages/Preferences";
import SeatSelection from "./pages/SeatSelection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightList />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/seats/:flightId" element={<SeatSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
