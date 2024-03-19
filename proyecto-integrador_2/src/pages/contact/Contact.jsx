import { Box } from "@mui/material";
import "./contact.scss";

import FormContact from "../../components/form/formContact/FormContact.jsx";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <FormContact/>
            </Box>

            <Box
                component="section"
                className="contact__section">
                <h3>Datos de contacto</h3>
                <Box className="contact__section__data">
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
                <Box className="contact__section__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5223962102427!2d-68.52767252438777!3d-31.537275074206214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968140281b059031%3A0xbdafc7e302f74c9a!2sPlaza%2025%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1706052594529!5m2!1ses-419!2sar"
                        loading="lazy">
                    </iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;