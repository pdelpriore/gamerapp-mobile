import { persistToken } from "../../../services/Token";

export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: "loading", payload: true });
    const response = await fetch("http://127.0.0.1:4000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const data = await response.json();

    if (data.status === 1) {
      dispatch({ type: "errorUserNotFound", payload: data.error });
    } else if (data.status === 2) {
      dispatch({ type: "errorEmailNotConfirmed", payload: data.error });
    } else if (data.status === 3) {
      dispatch({ type: "errorPasswordNotCorrect", payload: data.error });
    } else if (data.status === 4) {
      dispatch({ type: "errorGoogleAccount", payload: data.error });
    } else if (data) {
      await persistToken(data.token);
    }
  };
};
