import { useState } from "react";
import { Typography } from "@mui/material";

import MessageBlock from "src/pages/Messages/components/MessageBlock";
import Button from "src/components/Button";
import SendMessageModal from "src/pages/Messages/components/SendMessageModal";
import UnreadMessagesNotificator from "src/pages/Messages/components/UnreadMessagesNotificator";
import SnackBar from "src/components/SnackBar";

import { cleanUp } from "src/pages/Messages/reducer";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { snackbarPositionCreator } from "src/helpers/snackbarPositionCreator";
import type { ApiError } from "src/types/apiError";
import stylesClasses from "src/pages/Messages/components/MessagesLayout/styles.module.scss";

interface MessagesLayoutProps {
  successMessage: string;
  error: ApiError;
}

const MessagesLayout = ({
  error,
  successMessage,
}: MessagesLayoutProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpenModal = (): void => {
    setIsOpen(!isOpen);
  };

  const onAlertClose = (): void => {
    dispatch(cleanUp());
  };

  return (
    <div className={stylesClasses.wrapper}>
      {isOpen && (
        <SendMessageModal isOpen={isOpen} toggleOpen={toggleOpenModal} />
      )}
      <div>
        <div className={stylesClasses.heading}>
          <Typography variant="h4" component="h1">
            Your messages
          </Typography>
          <Button
            variant="contained"
            onClick={toggleOpenModal}
            id="send-button"
          >
            Create new message
          </Button>
        </div>
      </div>
      <MessageBlock />
      <UnreadMessagesNotificator />
      {error && (
        <SnackBar
          message={error}
          severity="error"
          duration={2000}
          position={snackbarPositionCreator("top", "center")}
          onClose={onAlertClose}
        />
      )}
      {successMessage && (
        <SnackBar
          message={successMessage}
          severity="success"
          duration={2000}
          position={snackbarPositionCreator("top", "center")}
          onClose={onAlertClose}
        />
      )}
    </div>
  );
};

export default MessagesLayout;
