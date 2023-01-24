import { createSelector } from "reselect";
import { getUsersList } from "src/pages/Messages/selectors/getUsersList";
import { getUserId } from "src/pages/Messages/selectors/getUserId";

export const getUserIdAndUsersList = createSelector(
  getUsersList,
  getUserId,
  (users, userId) => ({ users, userId })
);
