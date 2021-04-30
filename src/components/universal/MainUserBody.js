import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MainUserBody.css";

function MainUserBody({ data }) {
  const makeTRansaction = () => {};
  console.log(data);
  return data.length > 0 ? (
    <div className="container" style={{ overflowX: "auto" }}>
      <Link to="/newtransaction">
        <button>+New</button>
      </Link>
      <h3>History:</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x._id}>
              <td>{x.date.substring(0, 10)}</td>
              <td>{x.amount}</td>
              <td>
                <Link to="/details">
                  <button>Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <>
      <Link to="/newtransaction">
        <button>+New</button>
      </Link>
      <h3>History:</h3>
      <h2 className="error-message">
        You have not made any transactions. Click "New" button to make one.
      </h2>
    </>
  );
}

export default MainUserBody;
