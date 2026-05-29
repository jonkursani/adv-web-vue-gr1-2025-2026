import Swal from "sweetalert2";

export function useAppToast() {
    const toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    })

    function showSuccess(message) {
        toast.fire({
            icon: 'success',
            title: message,
        })
    }

    function showWarning(message) {
        toast.fire({
            icon: 'warning',
            title: message,
        })
    }

    function showError(message) {
        toast.fire({
            icon: 'error',
            title: message,
        })
    }

    return {
        showSuccess,
        showWarning,
        showError
    }
}