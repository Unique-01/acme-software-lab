import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "pages/Home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseLanding from "pages/Course/CourseLanding/CourseLanding";
import "./App.css";
import CourseList from "pages/Course/CourseList";
import CourseDetail from "pages/Course/CourseDetail";
import AboutPage from "pages/AboutPage";
import SignUp from "pages/Auth/SignUp";
import ServiceDetail from "pages/ServiceDetail";
import Contact from "pages/Contact";
import BlogList from "pages/Blog/BlogList";
import BlogDetail from "pages/Blog/BlogDetail";
import DashboardLayout from "pages/StudentDashboard/layout/DashboardLayout";
import StudentDashboard from "pages/StudentDashboard";
import GeneralLayout from "layout/GeneralLayout";
import Profile from "pages/StudentDashboard/Profile";
import Timetable from "pages/StudentDashboard/Timetable";
import PaymentTable from "pages/StudentDashboard/PaymentTable";
import PaymentCheckout from "pages/StudentDashboard/PaymentCheckout";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<GeneralLayout />}>
                        <Route index element={<Homepage />} />
                        <Route path="courses" element={<CourseLanding />} />
                        <Route path="courses/list" element={<CourseList />} />
                        <Route
                            path="courses/list/:courseId"
                            element={<CourseDetail />}
                        />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route
                            path="service/:serviceSlug"
                            element={<ServiceDetail />}
                        />
                        <Route path="contact" element={<Contact />} />
                        <Route path="blogs" element={<BlogList />} />
                        <Route path="blogs/:blogId" element={<BlogDetail />} />
                    </Route>
                    <Route path="student" element={<DashboardLayout />}>
                        <Route index element={<StudentDashboard />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="timetable" element={<Timetable />} />
                        <Route path="payment" element={<PaymentTable />} />
                        <Route
                            path="payment/:courseTitle"
                            element={<PaymentCheckout />}
                        />
                    </Route>
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>

                {/* <Footer /> */}
            </BrowserRouter>
        </>
    );
}

export default App;
