import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./app.scss";

const App = () => {
    const [image, setImage] = useState();

    const formik = useFormik({
        initialValues: {
            id: 1,
            file: null,
        },
        onSubmit: async (values) => {
            try {
                const body = {
                    file: values.file,
                };

                const options = {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                };

                await axios.post(`http://127.0.0.1:3000/api/coches/upload/${values.id}`, body, options)
                    .then((response) => {
                        setImage(response.data?.url);
                    }).catch((error) => console.log(error));
            } catch (error) {
                console.error("Error al cargar el archivo", error);
            }
        },
    });

    return (
        <div className="app">
            <h1 className="title">Ejemplo de subida de archivo</h1>

            <form
                className="app__form"
                onSubmit={formik.handleSubmit}>

                <div className="app__form__group">
                    <label htmlFor="file">ID:</label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={formik.values.id}
                        onChange={formik.handleChange}/>
                </div>

                <div className="app__form__group">
                    <label htmlFor="file">Seleccionar Archivo:</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".png, .jpg"
                        onChange={(event) => formik.setFieldValue("file", event.target.files[0])}
                        onBlur={formik.handleBlur}
                    />
                </div>

                <button type="submit">Subir Archivo</button>
            </form>

            <div className="app__image">
                <img src={image} alt="Imagen de prueba"/>
            </div>
        </div>
    );
};

export default App;