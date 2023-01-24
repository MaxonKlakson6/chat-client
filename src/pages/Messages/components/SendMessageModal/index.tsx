import { useState } from "react";
import type { FormEvent, SyntheticEvent } from "react";
import { Autocomplete, Modal, TextField } from "@mui/material";

import Input from "src/components/Input";
import Button from "src/components/Button";

import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { getUserIdAndUsersList } from "src/pages/Messages/selectors/getUserIdAndUsersList";
import { useForm } from "src/hooks/useForm";
import { sendMessage } from "src/pages/Messages/thunks/sendMessage";
import stylesClasses from "src/pages/Messages/components/SendMessageModal/styles.module.scss";

interface SendMessageModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

interface SelectedUser {
  label: string;
  id: number;
}

const SendMessageModal = ({
  isOpen,
  toggleOpen,
}: SendMessageModalProps): JSX.Element => {
  const { users, userId } = useAppSelector(getUserIdAndUsersList);
  const dispatch = useAppDispatch();

  const [selectedUser, setSelectedUser] = useState<SelectedUser | null>(null);

  const [form, handleChangeForm] = useForm({
    theme: "",
    message: "",
  });

  const handleSelectUser = (
    event: SyntheticEvent,
    selectedUser: SelectedUser | null
  ): void => {
    setSelectedUser(selectedUser);
  };

  const handleSendMessage = (event: FormEvent): void => {
    event.preventDefault();
    if (selectedUser && form.message) {
      const id = userId as number;
      const newMessage = {
        senderId: id,
        recipientId: selectedUser.id,
        text: form.message,
        theme: form.theme,
      };

      dispatch(sendMessage(newMessage));
      toggleOpen();
    }
  };

  return (
    <Modal className={stylesClasses.wrapper} open={isOpen} onClose={toggleOpen}>
      <form className={stylesClasses.modalWindow} onSubmit={handleSendMessage}>
        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Users" />}
          options={users.map((user) => ({
            label: user.name,
            id: user.id,
          }))}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={handleSelectUser}
        />
        <Input
          variant="standard"
          placeholder="Theme"
          fullWidth
          name="theme"
          value={form.theme}
          onChange={handleChangeForm}
        />
        <textarea
          placeholder="Type message..."
          className={stylesClasses.textField}
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChangeForm}
        ></textarea>
        <Button variant="contained" type="submit">
          Send message
        </Button>
      </form>
    </Modal>
  );
};

export default SendMessageModal;
