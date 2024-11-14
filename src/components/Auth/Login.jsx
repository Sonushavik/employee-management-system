import React, { useState } from "react";

const Login = ({handleLogin}) => {

  // console.log(handleLogin)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("Form Submitted!");
    console.log("Email is :",email)
   console.log("Password is :",password)
   setEmail("")
   setPassword("")
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="border-2 border-green-600  p-3 m-10 rounded-[20px]">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
          value={email}
          onChange={(e) =>{
                setEmail(e.target.value)
                
          }}
            required
            type="email"
            placeholder="Enter your Email"
            className=" 
                        background-black bg-transparent 
                        outline-none
                        border-2 border-emerald-600 first-line:text-xl rounded-full py-4 px-4"
          />

          <input
          value={password}
          onChange={(e) =>{
                setPassword(e.target.value)
          } }
            required
            type="password"
            placeholder="Enter your Password"
            autoComplete="current-password"
            className=" 
                        background-black bg-transparent 
                        outline-none
                        border-2 border-emerald-600 first-line:text-xl rounded-full py-4 px-4 mt-5"
          />

          <button
            className=" 
                        bg-red-600 bg-transparent 
                        outline-none
                        hover:border-2 border-emerald-600 first-line:text-xl rounded-full py-4 px-4 mt-5"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
