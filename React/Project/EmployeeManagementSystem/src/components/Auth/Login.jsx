import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
   handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2  border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={submitHandle}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id="input"
            placeholder="Enter Email"
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id="password"
            placeholder="Enter Password"
            className="outline-none mt-3 bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
          />
          <button className="text-white mt-7 text-lg outline-none  border-none bg-emerald-600 py-2 px-8 w-full rounded-full hover:bg-emerald-700 hover:cursor-pointer placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
