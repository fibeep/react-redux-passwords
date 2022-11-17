import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPassword } from "./actions";

function generatePassword() {
  // generate a password here
  console.log("generating password");
  return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000)
  
}

function Password() {
    const dispatch = useDispatch();
  const [password, setPassword] = useState("p@$$w0rd");
    const [name, setName] = useState("");
  return (
    <div>
      <div>{password}</div>
      <div>
        <button
          onClick={(e) => {
            setPassword(generatePassword());
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div>
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <div>
        <button
          onClick={(e) => {
            dispatch(addPassword(name, password));
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Password;
