const initialState = {
  authentication: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "authenticated":
      return { ...state, authentication: action.payload };
    case "unauthenticated":
      return { ...state, authentication: action.payload };
    default:
      return state;
  }
};

export default authenticationReducer;
