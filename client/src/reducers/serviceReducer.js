import { ADD_SERVICE } from "../actions/Types";

const initialState = {
  service: {},
  loading: true,
};

const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SERVICE:
      return {
        ...state,
        service: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default serviceReducer;
