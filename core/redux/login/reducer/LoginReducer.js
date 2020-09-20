const initialState = {
  loading: false,
  userNotFound: null,
  emailNotConfirmed: null,
  passwordNotCorrect: null,
  googleAccount: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "errorUserNotFound":
      return { ...state, loading: false, userNotFound: action.payload };
    case "errorEmailNotConfirmed":
      return { ...state, loading: false, emailNotConfirmed: action.payload };
    case "errorPasswordNotCorrect":
      return { ...state, loading: false, passwordNotCorrect: action.payload };
  }
};
