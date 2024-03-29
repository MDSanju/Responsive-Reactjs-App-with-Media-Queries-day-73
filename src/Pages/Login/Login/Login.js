import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  console.log(signInUsingGoogle);
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-dark">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
