import "./login.scss";
import { Link } from "react-router-dom";
import bgIcon from "../../assets/bg.png";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={bgIcon} alt="" />
      </div>
    </div>
  );
}

export default Login;
