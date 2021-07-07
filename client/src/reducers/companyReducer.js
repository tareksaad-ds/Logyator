import { CREATE_COMPANY, GET_COMPANIES, GET_COMPANY } from "../actions/Types";

const initialState = {
  companies: [],
  company: {},
  loading: true,
};

const companyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANIES:
    case CREATE_COMPANY:
      return {
        ...state,
        companies: payload,
        loading: false,
      };
    case GET_COMPANY:
      return {
        ...state,
        company: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default companyReducer;
