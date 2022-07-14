import React from "react";
import { useNavigate } from "react-router-dom";

function Secret() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/register");
  };
  return (
    <div className="private">
      <h1>Super secret page</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default Secret;
