import axios from "axios";
import { CREATE_CUSTOMER } from "./Types";
import { toast } from "react-toastify";

toast.configure();

export const createCustomer = (customer) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/companinig",
      customer
    );
    dispatch({
      type: CREATE_CUSTOMER,
      payload: localStorage.setItem("customer", JSON.stringify(res.data)),
    });
    toast.success("Your information successfully added", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    console.log(err);
    toast.danger("Your info didn't added", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
