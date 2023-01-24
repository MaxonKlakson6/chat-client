import { useAppSelector } from "src/hooks/reduxHooks";

import Message from "src/pages/Messages/components/Message";
import stylesClasses from "src/pages/Messages/components/MessageBlock/styles.module.scss";

const MessageBlock = (): JSX.Element => {
  const messages = useAppSelector((state) => state.messages.messages);

  return (
    <div className={stylesClasses.wrapper}>
      {messages.map((message) => {
        return (
          <Message
            key={`message${message.id}`}
            id={message.id}
            theme={message.theme}
            text={message.text}
            senderName={message.senderName}
            isRead={message.isRead}
            createdAt={message.createdAt}
          />
        );
      })}
    </div>
  );
};

export default MessageBlock;
