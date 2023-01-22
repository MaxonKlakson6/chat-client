import { Navigate, Route, Routes } from "react-router-dom";

import SignInContainer from "src/pages/SignIn/container/SignInContainer";

import { ROUTE_NAMES } from "src/routes/routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTE_NAMES.SIGN_IN} replace />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    </Routes>
  );
};

export default Router;
