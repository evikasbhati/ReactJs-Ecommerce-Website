import { useReducer } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./SignUp.css";
import InputField from "./InputField";
import axios from "axios";
import { url } from "../requestMethod/RequestMethod";

const ACTIONS = {
  USERNAME: "username",
  PASSWORD: "password",
  EMAIL: "email",
};

const signReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.USERNAME: {
      return {
        ...state,
        username: action.username,
      };
    }
    case ACTIONS.PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case ACTIONS.EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    default:
      return {
          username: "",
          email: "",
          password: "",
        
      };
  }
};

const SignUp = () => {
  const navigate=useNavigate()
  const [state, signDispatch] = useReducer(signReducer, {
    username: "",
    email: "",
    password: "",
  });

  const handleUserName = (e) => {
    signDispatch({
      type: ACTIONS.USERNAME,
      username: e.target.value,
    });
  };

  const handlePassword = (e) => {
    signDispatch({
      type: ACTIONS.PASSWORD,
      password: e.target.value,
    });
  };

  const handleEmail = (e) => {
    signDispatch({
      type: ACTIONS.EMAIL,
      email: e.target.value,
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if(state.username!=="" && state.password!=="" && state.email!==""){
      axios.post(`${url}user/auth/register`,state)
      .then((response)=>{
        if(response.status===200){
          navigate("/login");
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    signDispatch({type:"default"})
    
  };

  return (
    <div className="signup_container">
      <div className="signup">
        <div className="sign_title_contaier">
          <div className="sign_title">Sign up</div>
          <div className="fast_sign">It's fast and easy</div>
        </div>
        <div>
          <hr className="sign_hr" />
        </div>
        <InputField
          placeholder="Username"
          handleFunction={handleUserName}
          label="Username should have atleast 5 characters"
          errormessage="somet"
        />
        <InputField
          placeholder="Email Address"
          handleFunction={handleEmail}
          label="contain lowercase, uppercase, special character & number "
          type="email"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|)^[^ ]+$"
        />
        <InputField
          placeholder="Password"
          handleFunction={handlePassword}
          label="Password should have atleast 5 characters"
          type="password"
        />
        <h4 className="create_account">
          Already have an <Link to="/login">account</Link>{" "}
        </h4>
        <div className="sign_sug">
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </div>
        <div className="signup_but">
          <button className="signup_button" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
