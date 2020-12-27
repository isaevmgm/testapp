const initialState = {
  items: [],
  loading: false,
};

const bigimgReducer = (state = initialState, action) => {
  switch (action.type) {
    case "bigimg/load/start":
      return {
        ...state,
        loading: true,
      };

    case "bigimg/load/success":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default bigimgReducer;
