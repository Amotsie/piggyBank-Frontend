import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const TodoProvider = (props) => {
  const [user, setUser] = useState("I AM THE USER");

  const [userTransactions, setUserTransactions] = useState([]);

  const [allUsers, setAllUsers] = useState([]);

  const [allTransactions, setAllTransactions] = useState([]);

  return (
    <UserContext.Provider
      value={[
        user,
        setUser,
        allUsers,
        setAllUsers,
        userTransactions,
        setUserTransactions,
        allTransactions,
        setAllTransactions,
      ]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
