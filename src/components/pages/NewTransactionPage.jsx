import React from "react";
import { Link } from "react-router-dom";

function NewTransactionPage() {
  // const [loader, setloader] = useState(true);
  const style = {
    body: {
      backgroundColor: "#eee",
      color: "var(--primary-color)",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      transitionDuration: "0.4s",
    },
  };
  return (
    <div className="container" style={style.body}>
      <h5>Transaction initiated 😎</h5>
      <p>
        Insert coind into the piggy bank and press "COMPLETE" when you are done.
      </p>
      <Link to="/welcome" className="btn-newTrans">
        COMPLETE
      </Link>
    </div>
  );
}

export default NewTransactionPage;
