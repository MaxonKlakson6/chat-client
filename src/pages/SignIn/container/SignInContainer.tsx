import { useLayoutEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";

import SignInLayout from "src/pages/SignIn/components/SignInLayout";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { authorization } from "src/pages/SignIn/thunks/authorization";
import { cleanUp } from "src/pages/SignIn/reducer";
import { ROUTE_NAMES } from "src/routes/routeNames";

const SignInContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { error, isLoading, userData } = useAppSelector(
    (state) => state.signIn
  );
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNameValue(event.target.value);
  };

  const handleSignIn = (event: FormEvent): void => {
    event.preventDefault();
    const trimmedName = nameValue.trim();

    if (trimmedName) {
      dispatch(authorization(trimmedName));
      setNameValue("");
    }
  };

  useLayoutEffect(() => {
    if (userData) {
      dispatch(cleanUp());
      navigate(ROUTE_NAMES.MESSAGES);
    }
  }, [userData]);

  return (
    <SignInLayout
      inputValue={nameValue}
      onChangeInput={handleNameChange}
      onSubmit={handleSignIn}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default SignInContainer;
