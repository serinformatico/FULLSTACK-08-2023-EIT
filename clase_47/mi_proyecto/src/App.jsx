import { Route, Routes } from "react-router-dom";
import "./app.scss";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <>
            <Header/>

            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}/>
                    <Route
                        path="/about"
                        element={<About/>}/>
                    <Route
                        path="/contact"
                        element={<Contact/>}/>
                </Routes>
            </Main>

            <Footer/>
        </>
    );
};

export default App;