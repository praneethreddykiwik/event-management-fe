import { toast } from "react-toastify";
export const toastGlobalProps = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
};

export const showErrorToast = (err, fallbackMessage = "Something went wrong") => {
  if (err?.response?.status === 401) return;

  toast.error(
    err?.response?.data?.message || err?.message || fallbackMessage
  );
};