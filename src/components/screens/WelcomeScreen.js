import { useState, useEffect, useContext, memo } from "react";
import axios from "axios";
import jwdDecode from "jwt-decode";
import { Link } from "react-router-dom";
import Navbar from "../universal/Navbar";
import MainUserBody from "../universal/MainUserBody";
import "./WelcomeScreen.css";
import { UserContext } from "../../context/UserContext";

const WelcomeScreen = memo(({ history }) => {
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

  const [error, setError] = useState(false);

  console.log(user._id, "IS lOGGED IN");

  useEffect(() => {
    let token = {};
    let data = {};
    try {
      token = localStorage.getItem("authToken");
      data = jwdDecode(token);
      setUser(data);

      if (!token) setError(true);
    } catch (error) {
      setUser("");
      setError(true);
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
      .get(`http://localhost:3000/api/transactions/${ID}`, config)
      .then(function (response) {
        setUserTransactions(response.data);
        console.log("DATA-----FETCHING SUCCESS");
      })
      .catch(function (error) {
        console.log(error.response.data);
        setTimeout(() => {
          setError("");
        }, 8000);
      });
  };

  // the displayed components
  return error ? (
    <span className="error-message">
      `You are not authorised, please <Link to="/">login</Link> first.`
    </span>
  ) : (
    <div className="container">
      <Navbar />
      <MainUserBody data={userTransactions} />
    </div>
  );
});

export default WelcomeScreen;
