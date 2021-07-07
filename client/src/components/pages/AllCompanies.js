import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../actions/companyActions";
import Company from "./Company";
import { BsBuilding, BsCaretDown } from "react-icons/bs";
import { Table } from "react-bootstrap";

const AllCompanies = () => {
  const dispatch = useDispatch();
  const All = useSelector((store) => store.companyReducer.companies.companies);
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <>
      <h2 className="comList">
        Companies List <BsBuilding />
      </h2>
      <Table>
        <thead>
          <tr>
            <th>
              Company Number <BsCaretDown />
            </th>
            <th>Company Name </th>
            <th>Shipping Type</th>
            <th> Period/day</th>
            <th> price/quantity</th>
            <th> Selection</th>
          </tr>
        </thead>
        {All &&
          All.map((company) => {
            return <Company key={company.id} company={company} />;
          })}
      </Table>
    </>
  );
};

export default AllCompanies;
