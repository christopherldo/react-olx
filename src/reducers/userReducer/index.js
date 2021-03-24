const initialState = {
  email: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {...state, email: action.payload.email};
    default:
      break;
  };

  return state;
};

export default userReducer;