import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UnreadMessagesNotificator = (): JSX.Element => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
      />
    </>
  );
};

export default UnreadMessagesNotificator;
