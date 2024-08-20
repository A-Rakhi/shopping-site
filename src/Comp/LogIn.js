import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[entry, setEntry] = useState([])
    
    const submitForm =(e)=>{
        e.preventDefault();

        const newEntry = {username: username, password:password};
        setEntry([...entry, newEntry]);
        console.log(entry)
    }

    return (
    <div className="container mx-auto my-20">
      <h2 className="font-bold text-3xl text-green-500 underline text-center uppercase">log In</h2>
      <div class="max-w-md mx-auto py-10">
        <form onSubmit={submitForm} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="my-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
              id="username" value={username}
              type="text" autoComplete="off"
              placeholder="Username" 
              onChange={ (e)=> setUsername(e.target.value)}
            />
          </div>
          <div class="my-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" value={password}
              type="password" autoComplete="off"
              placeholder="******************"
              onChange={(e)=> setPassword(e.target.value)}
            />
            <p class="text-gray-500 text-sm italic py-5">
              Not a member?{" "}
              <span className="text-blue-400 underline">
                <Link to="/register" >Register</Link>
              </span>
            </p>
          </div>
          <div class="flex items-center justify-between ">
            
            <Link to="/home"><button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button> </Link>
            <Link
              class="inline-block align-baseline font-bold text-sm text-red-500"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        {/* <div>
            {
                entry.map((element)=>{
                    return(
                        <div className="flex space-x-6">
                            <p>{element.username}</p>
                            <p>{element.password}</p>
                            </div>
                    )
                })
            }
        </div> */}

      </div>
    </div>
  );
}

export default LogIn;
