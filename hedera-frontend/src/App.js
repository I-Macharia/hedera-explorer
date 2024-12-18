import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TokenExplorer from "./components/TokenExplorer";
import TokenDetails from "./components/TokenDetails";
import "./App.css";
import Navbar from './components/navbar';
import Home from "./components/Home";
import Footer from "./services/footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tokens" element={<TokenExplorer />} />
                <Route path="/tokens/:tokenId" element={<TokenDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
