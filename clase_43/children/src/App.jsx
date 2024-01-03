
import Despedida from "./Despedida";
import Saludo from "./Saludo";
import "./app.scss";

const App = () => {
    return (
        <div>
            <Saludo nombre="Juan" apellido="Perez" edad="21"/>
            <Saludo nombre="Lorena" />
            <Despedida titulo="Título por Props 1">
                <div>
                    <h4>Titulo del children 1</h4>
                    <p>Lorem ipsum dolor situs necessitatibus similique.</p>
                </div>
            </Despedida>
            <Despedida titulo="Título por Props 2">
                <div>
                    <h4>Titulo del children 2</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero consequuntur optio, modi dolores incidunt cumque placeat fugit harum soluta libero aut, nesciunt iste odio? Facilis dolorum voluptatibus necessitatibus similique.</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero consequuntur optio, modi dolores incidunt cumque placeat fugit harum soluta libero aut, nesciunt iste odio? Facilis dolorum voluptatibus necessitatibus similique.</p>
                </div>
            </Despedida>
        </div>
    );
};

export default App;