import { CREATE_CUSTOMER } from "../actions/Types";

const initialState = {
  customer: "",
};

const customerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CUSTOMER:
      return {
        ...state,
        customer: payload,
      };
    default:
      return state;
  }
};
export default customerReducer;
