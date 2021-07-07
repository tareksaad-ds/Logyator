import axios from "axios";
import { CREATE_COMPANY, GET_COMPANIES, GET_COMPANY } from "./Types";
import { toast } from "react-toastify";

toast.configure();
// Get all companies

export const getCompanies = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/companies");
    dispatch({
      type: GET_COMPANIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createCompany = (company) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/companies",
      company
    );
    dispatch({
      type: CREATE_COMPANY,
      payload: res.data,
    });
    toast.success("Your company successfully added", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    console.log(err);
    toast.danger("Your company didn't added", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const getCompany = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/companies/${id}`);
  dispatch({
    type: GET_COMPANY,
    payload: res.data.company,
  });
};
