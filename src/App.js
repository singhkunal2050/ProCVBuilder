import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Builder from "./pages/Builder";
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Router>
      <Helmet>
          <meta charSet="utf-8" />
          <title>ProCVBuilder🎓</title>
           <link rel="icon" href="https://i.imgur.com/QQQQQQQ.png" />
           <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;600&display=swap" rel="stylesheet"/>
      </Helmet>
        <Navbar />
        <main className="min-h-[70vh] font-sora">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
