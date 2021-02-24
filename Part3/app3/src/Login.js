import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "./reducers/noteReducer";
import { Link, useParams, useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin("mluukkai");
    history.push("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
