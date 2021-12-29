import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
    </>
  );
};

export { Login };
