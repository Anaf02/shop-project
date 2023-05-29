import { Button } from "react-bootstrap";
import getPass from "../firebase/getPass";
import { useState } from "react";

interface Props {
  setLoggedIn: (newState: boolean) => void;
}

function Login(props: Props) {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");
  const [wrong, setWrong] = useState(false);
  getPass().then((result) => {
    setPass(result);
  });
  return (
    <>
      <>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {wrong ? <div>Wrong Password</div> : ""}
        <Button
          type="button"
          onClick={() => {
            if (value === pass) {
              props.setLoggedIn(true);
            } else {
              setWrong(true);
            }
          }}
        >
          Log in
        </Button>
      </>
    </>
  );
}

export default Login;
