export const reducer = (state, action) => {
  debugger
  switch (action.type) {
    case 'user-update':
      return { ...state, user: action.payload }


    default:
      return state;
  }
};
