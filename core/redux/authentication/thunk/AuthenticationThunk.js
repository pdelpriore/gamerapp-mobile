import { hasToken } from "../../../services/Token";

export const checkToken = () => {
  return async (dispatch, getState) => {
    const token = await hasToken();
    token !== null
      ? dispatch({ type: "authenticated", payload: true })
      : dispatch({ type: "unauthenticated", payload: false });
  };
};
