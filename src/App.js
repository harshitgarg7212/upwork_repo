import { Outlet } from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
