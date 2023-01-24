import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import type { Message } from "src/pages/Messages/types/message";
import stylesClasses from "src/pages/Messages/components/Message/styles.module.scss";

type MessageProps = Omit<Message, "updatedAt" | "UserId">;

const Message = ({
  senderName,
  theme,
  text,
  createdAt,
}: MessageProps): JSX.Element => {
  const sendDate = new Date(createdAt).toLocaleString();
  return (
    <div className={stylesClasses.wrapper}>
      <div className={stylesClasses.heading}>
        <Typography variant="h5">
          {senderName}: {<span>{sendDate}</span>}
        </Typography>
      </div>
      <Accordion className={stylesClasses.accordion}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <span className={stylesClasses.accordionFields}>Theme: </span>
            {theme || "Without theme"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={stylesClasses.some}>
          <Typography className={stylesClasses.textWrap}>
            <span className={stylesClasses.accordionFields}>Message: </span>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Message;
