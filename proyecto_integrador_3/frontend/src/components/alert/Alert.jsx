import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert as AlertUI, Collapse, IconButton } from "@mui/material";
import "./alert.scss";

import CloseIcon from "@mui/icons-material/Close";

const Alert = (props) => {
    const { openAlert, setOpenAlert, severity, message, redirectUrl } = props;

    const navigate = useNavigate();

    // useNavigate es un hook proporcionado por React Router. Este hook permite
    // la navegación programática en la aplicación, lo que significa que puedes
    // cambiar de ruta (URL) de forma dinámica en respuesta a ciertos eventos
    // que sucedan en la aplicación.

    const handleOnClickClose = () => {
        setOpenAlert(false);

        if (navigate) {
            navigate(redirectUrl);
        }
    };

    useEffect(() => {
        if (openAlert) {
            setTimeout(() => {
                handleOnClickClose();
            }, 3000);
        }
    }, [openAlert] );

    return (
        <Collapse
            className="alert"
            in={openAlert}>
            <AlertUI
                severity={severity}
                action={
                    <IconButton
                        size="small"
                        onClick={handleOnClickClose}>
                        <CloseIcon/>
                    </IconButton>
                }>
                <span className="alert__message">{message}</span>
            </AlertUI>
        </Collapse>
    );
};

Alert.propTypes = {
    openAlert: PropTypes.bool.isRequired,
    setOpenAlert: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    redirectUrl: PropTypes.string,
    severity: PropTypes.string,
};

Alert.defaultProps = {
    severity: "success",
};

export default Alert;