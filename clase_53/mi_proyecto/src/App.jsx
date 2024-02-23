import "./app.scss";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

const App = () => {
    return (
        <ShoppingCartProvider>
            <Header/>
            <Main/>
            <Footer/>
        </ShoppingCartProvider>
    );
};

export default App;