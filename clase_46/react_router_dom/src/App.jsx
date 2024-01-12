import { NavLink, Route, Routes } from "react-router-dom";
import "./app.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <>
            <header>
                <h1>React Router DOM</h1>

                <nav>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/about">Nosotros</NavLink></li>
                        <li><NavLink to="/contact">Contacto</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <footer>
            Footer
            </footer>
        </>
    );
};

export default App;