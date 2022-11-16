import React, { useState } from "react";

function generatePassword() {
  // generate a password here
  console.log("generating password");
  return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000)
  
}

function Password() {
  const [password, setPassword] = useState("p@$$w0rd");

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
    </div>
  );
}

export default Password;
