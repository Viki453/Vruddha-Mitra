import { useState, useEffect, useReducer, useRef } from "react";
import styles from "./Login.module.css";
import TextInput from "./TextInput";
import { useNavigate } from "react-router";

function Login() {
  const [login, setLogin] = useState(20);
  const [loginProgress, setLoginProgress] = useState(1);
  const navigate = useNavigate();

  function reducer(state, action) {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.field]: action.payload };
      default:
        throw new Error("Unknown action type: " + action.type);
    }
  }

  const Head = ["I am", "I am X years old", "I live in", "My wisdom says..."];

  const initialState = {
    name: "",
    age: "",
    city: "",
    quote: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a ref for input field
  const inputRef = useRef(null);

  useEffect(() => {
    setLogin((prevLogin) => Math.min(prevLogin + 0, 100));
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Ensure input remains focused
    }
  }, [loginProgress]);

  function incrementLogin(e) {
    e.preventDefault();

    // Ensure required fields are filled before proceeding
    if (loginProgress === 1 && !state.name) return;
    if (loginProgress === 2 && !state.age) return;
    if (loginProgress === 3 && !state.city) return;
    if (loginProgress === 4 && !state.quote) return;
    if (loginProgress === 5) {
      navigate("/vm/app");
      return;
    }

    setLoginProgress((prev) => Math.min(prev + 1, 5));
    setLogin((prevLogin) => Math.min(prevLogin + 20, 100));
  }

  function decrementLogin(e) {
    e.preventDefault();
    if (loginProgress > 1) {
      setLoginProgress((prev) => prev - 1);
      setLogin((prevLogin) => Math.max(prevLogin - 20, 20));
    }
  }

  function getForm() {
    let field = "";
    let placeholder = "";
    let value = "";
    let heading = Head[loginProgress - 1];

    switch (loginProgress) {
      case 1:
        field = "name";
        placeholder = "Enter your name";
        value = state.name;

        break;
      case 2:
        field = "age";
        placeholder = "Enter your Age";
        value = state.age;
        break;
      case 3:
        field = "city";
        placeholder = "Enter your city";
        value = state.city;
        break;
      case 4:
        field = "quote";
        placeholder = "I say that...";
        value = state.quote;
        break;
      default:
        return <h2>You are all set! Great change awaits you.</h2>;
    }

    return (
      <>
        <h2>
          {heading}
          {/* {loginProgress === 4
            ? "Your Message to the World"
            : `I ${loginProgress === 2 ? "x years old" : `live in`}`} */}
        </h2>
        <TextInput
          ref={inputRef} // Keep input focused
          placeHolder={placeholder}
          value={value}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field, payload: e.target.value })
          }
        />
      </>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${login}%`,
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.formOne} onSubmit={incrementLogin}>
          {getForm()}
          <div className={styles.buttonContainer}>
            {loginProgress > 1 && loginProgress < 5 && (
              <button type="button" onClick={decrementLogin}>
                Back
              </button>
            )}
            <button type="submit">Next →</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
