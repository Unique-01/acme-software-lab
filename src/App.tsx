import React from "react";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "pages/Home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "layout/Footer";
import CourseLanding from "pages/Course/CourseLanding/CourseLanding";
import "./App.css"


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="courses" element={<CourseLanding />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
