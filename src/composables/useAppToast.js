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

    function showDialog(
        title = "Are you sure?",
        text = "You won't be able to revert this!",
        confirmButtonText = "Yes, delete it!"
    ) {
        return Swal.fire({
            title: title,
            text: text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: confirmButtonText
        })
    }

    return {
        showSuccess,
        showWarning,
        showError,
        showDialog
    }
}