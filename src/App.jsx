import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PastProjectDashboard from "./pages/pastProjectDashboard.jsx";
import Workstation from "./pages/workstation.jsx";
import NotFound from "./pages/404.jsx";
// ...Meta if you want global meta tags
import "./App.css"; // (optional) Component-level styles

const App = () => {
  return (
    <BrowserRouter>
      {/* <Meta /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastProjectDashboard" element={<PastProjectDashboard />} />
        <Route path="/workstation" element={<Workstation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
