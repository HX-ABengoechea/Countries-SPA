//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*IMPORT DE COMPONENTES*/
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Activity from "./components/activity/Activity";
import Detail from "./components/detail/Detail";
/*IMPORT DE CSS*/
import "./App.css";
//______________________________________________________________________________

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home/detail/:id" element={<Detail />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/activity" element={<Activity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
