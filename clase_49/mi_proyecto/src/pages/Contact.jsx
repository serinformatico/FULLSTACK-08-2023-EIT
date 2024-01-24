import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./contact.scss";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

import InputField from "../components/form/inputField/InputField";

const Contact = () => {
    const validationSchema = yup.object({
        fullname: yup
            .string("error de tipo")
            .min(7, "Ingresa un nombre y apellido que tenga mas de 7 carateres")
            .required("Este campo es requerido"),
        telephone: yup
            .string("error de tipo")
            .min(9, "Ingresa un teléfono que tenga mas de 9 carateres")
            .required("Este campo es requerido"),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            telephone: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}>
                    <InputField
                        label="Nombrey apellido"
                        name="fullname"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        errorMessage={formik.touched.fullname && formik.errors.fullname}
                        inputProps={{ maxLength: 25 }}
                    >
                    </InputField>
                    <InputField
                        label="Teléfono"
                        name="telephone"
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                        errorMessage={formik.touched.telephone && formik.errors.telephone}
                        inputProps={{ maxLength: 15 }}
                    >
                    </InputField>

                    <TextField
                        label="Email"
                        fullWidth
                        name="email">
                    </TextField>
                    <TextField
                        label="Consulta"
                        fullWidth
                        multiline
                        rows="4"
                        helperText="texto de ayuda"
                        name="consult"
                        id="namconsulte">
                    </TextField>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="small">Envíar consulta</Button>
                </Box>

            </Box>

            <Box
                component="section"
                className="contact__section">
                <h3>Datos de contacto</h3>
                <Box>
                    <Box>
                        <PlaceIcon/>
                        <span>Av. Siempreviva 740 - San Juan - Argentina.</span>
                    </Box>
                    <Box>
                        <PhoneIcon/>
                        <span>02644258877</span>
                    </Box>
                    <Box>
                        <MailIcon/>
                        <span>info@pizzastore.com</span>
                    </Box>
                </Box>
                <Box>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5223962102427!2d-68.52767252438777!3d-31.537275074206214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968140281b059031%3A0xbdafc7e302f74c9a!2sPlaza%2025%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1706052594529!5m2!1ses-419!2sar"
                        width="100%"
                        height="300"
                        loading="lazy">
                    </iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;