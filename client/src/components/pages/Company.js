import React from "react";
import { Link } from "react-router-dom";

const Company = ({ company }) => {
  return (
    <tbody>
      <tr>
        <td>{company.id}</td>
        <td>{company.name}</td>
        <td>{company.shipping_type}</td>
        <td>{company.avg_period}</td>
        <td>{company.avg_payment}</td>
        <td>
          <Link to={"/companies/" + company.id} className="btn btn-success">
            Select
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Company;
