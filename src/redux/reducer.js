let initialState = {
  watched: null,
};
const watchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WATCHED':
      return action.payload;

    default:
      return state;
  }
};

export default watchedReducer;
