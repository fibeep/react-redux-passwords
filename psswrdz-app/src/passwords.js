import React, { useState } from "react";

function generatePassword() {
  // generate a password here
  console.log("generating password");
  return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000)
  
}

function Password() {
  const [password, setPassword] = useState("p@$$w0rd");
  const [description, setDescription] = useState('description')

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
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <div>
        <input onChange={(e) => setDescription(e.target.value)} value={description} />
      </div>
    </div>
  );
}

export default Password;
