import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Toast = ({ message, success, error, info, ...rest }) =>
  success
    ? toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 20000,
      })
    : error
    ? toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 20000,
      })
    : info
    ? toast.info(message, {
        position: toast.POSITION.BOTTOM_LEFT,
        draggable: true,
      })
    : null;

export default Toast;
