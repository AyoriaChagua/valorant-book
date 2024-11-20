import { useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const useMessages = () => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const addSuccessMessage = (message: string) => {
        setSuccessMessage(message);
    };

    const addErrorMessage = (message: string) => {
        setErrorMessage(message);
    };

    useEffect(() => {
        if (successMessage) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: successMessage,
                showConfirmButton: false,
                timer: 2000
            });
            setTimeout(() => {
                setSuccessMessage(null);
            }, 2000);
        }
    }, [successMessage]);

    useEffect(() => {
        if (errorMessage) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    }, [errorMessage]);

    return {
        addSuccessMessage,
        addErrorMessage,
        successMessage,
        errorMessage
    };
};