import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

import "./app.scss";

const App = () => {
    return (
        <>
            <Header title="Clase 43" subtitle="Modularización" />
            <Main>Soy el main</Main>
            <Sidebar />
            <Footer />
        </>
    );
};

export default App;