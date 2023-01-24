import type { ChangeEvent, FormEvent } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import SnackBar from "src/components/SnackBar";

import { useAppDispatch } from "src/hooks/reduxHooks";
import { snackbarPositionCreator } from "src/helpers/snackbarPositionCreator";
import { cleanUp } from "src/pages/SignIn/reducer";

import type { ApiError } from "src/types/apiError";
import stylesClasses from "src/pages/SignIn/components/SignInLayout/styles.module.scss";

interface SignInLayoutProps {
  inputValue: string;
  error: ApiError;
  isLoading: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

const SignInLayout = ({
  inputValue,
  error,
  isLoading,
  onChangeInput,
  onSubmit,
}: SignInLayoutProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const onAlertClose = (): void => {
    dispatch(cleanUp());
  };

  return (
    <div className={stylesClasses.wrapper}>
      <form className={stylesClasses.form} onSubmit={onSubmit}>
        <Input
          className={stylesClasses.nameField}
          variant="standard"
          placeholder="Name"
          color="success"
          value={inputValue}
          onChange={onChangeInput}
        />
        <Button
          color="success"
          variant="outlined"
          type="submit"
          disabled={isLoading}
        >
          Join
        </Button>
      </form>
      {error && (
        <SnackBar
          message={error}
          severity="error"
          duration={2000}
          position={snackbarPositionCreator("top", "center")}
          onClose={onAlertClose}
        />
      )}
    </div>
  );
};

export default SignInLayout;
