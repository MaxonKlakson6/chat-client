import { useEffect } from "react";

import MessagesLayout from "src/pages/Messages/components/MessagesLayout";

import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { getUserId } from "src/pages/Messages/selectors/getUserId";
import { receiveMessages } from "src/pages/Messages/thunks/receiveMessages";
import { receiveUsers } from "src/pages/Messages/thunks/receiveUsers";
import { cleanUp } from "src/pages/Messages/reducer";
import { receiveUnreadMessages } from "src/pages/Messages/thunks/receiveUnreadMessages";

const MessagesContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(getUserId);
  const { successMessage, error } = useAppSelector((state) => state.messages);

  useEffect(() => {
    const userId = id as number;
    dispatch(receiveMessages(userId));
    dispatch(receiveUsers());
    return () => {
      dispatch(cleanUp());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(receiveUnreadMessages(id as number));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <MessagesLayout successMessage={successMessage} error={error} />;
};

export default MessagesContainer;
