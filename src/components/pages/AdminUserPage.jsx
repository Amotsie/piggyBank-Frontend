import React, { useContext, memo, useEffect } from "react";
import axios from "axios";
import jwdDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Navbar from "../universal/Navbar";

const AdminUserPage = memo(({ history }) => {
  const [
    user,
    setUser,
    allUsers,
    setAllUsers,
    userTransactions,
    setUserTransactions,
    allTransactions,
    setAllTransactions,
  ] = useContext(UserContext);

  useEffect(() => {
    let token = {};
    let data = {};
    try {
      token = localStorage.getItem("authToken");
      data = jwdDecode(token);
      setUser(data);
    } catch (error) {
      setUser("");
      history.push("/");
    }
    fetchPrivateDate(token, data._id);
  }, []);

  const fetchPrivateDate = async (token, ID) => {
    console.log("FETCHING DATA-----");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };

    await axios
      .get(`http://localhost:3000/api/users/`, config)
      .then(function (response) {
        setAllUsers(response.data);
        console.log("DATA-----FETCHING SUCCESS");
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const handleDeleteUser = (id) => {
    setAllUsers(allUsers.filter((u) => u._id !== id));
    //Send delete request api/users/id
    //fetch data helper (method:delete, url,data)
  };

  return allUsers.length > 0 ? (
    <div className="container" style={{ overflowX: "auto" }}>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/register">
          <button>Add New</button>
        </Link>
        <Link to="/adminhome">
          <button>Back</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.surname}</td>
              <td>{x.email}</td>
              <td>
                <Link to="/register">
                  <button className="btn-sm btn-secondary">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-sm btn-danger"
                  onClick={() => handleDeleteUser(x._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <>
      <Navbar />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/register">
            <button>Add New</button>
          </Link>
          <Link to="/adminhome">
            <button>Back</button>
          </Link>
        </div>
        <h3>History:</h3>
        <h2 className="error-message">
          There is currently no users registerd.
        </h2>
      </div>
    </>
  );
});

export default AdminUserPage;
