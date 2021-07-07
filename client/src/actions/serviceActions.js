import axios from "axios";
import { ADD_SERVICE } from "./Types";
import { toast } from "react-toastify";

toast.configure();

export const addService = (id, service) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/companies/${id}/service`,
      service
    );
    dispatch({
      type: ADD_SERVICE,
      payload: res.data,
    });
    toast.success("Your service successfully added", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    console.log(err);
    toast.danger("Your service didn't added", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
