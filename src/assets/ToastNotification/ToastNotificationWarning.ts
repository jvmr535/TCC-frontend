import { toast } from "react-toastify";

export const toastNotificationWarning = (message: string) =>
  toast.warning(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
