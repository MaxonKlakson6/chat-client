import { Navigate, Route, Routes } from "react-router-dom";

import SignInContainer from "src/pages/SignIn/container/SignInContainer";
import MessagesContainer from "src/pages/Messages/container/MessagesContainer";

import { ROUTE_NAMES } from "src/routes/routeNames";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTE_NAMES.SIGN_IN} replace />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.MESSAGES} element={<MessagesContainer />} />
    </Routes>
  );
};

export default Router;
