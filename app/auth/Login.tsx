"use client";
// Standard packages
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginAsAdmin, setLoginAsAdmin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ userName, password, loginAsAdmin });
    if (userName !== "" && password !== "") {
      router.push("/admin");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-600 flex justify-center items-center">
        <img src="/morro-logo.png" alt="Morro Data Logo" className="h-32" />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-8">
        <h2 className="text-3xl font-semibold mb-6">
          Sign in Bigger Inside Demo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="loginAsAdmin"
              checked={loginAsAdmin}
              onChange={() => setLoginAsAdmin(!loginAsAdmin)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="loginAsAdmin" className="text-sm">
              Login As Business Admin
            </label>
          </div>
          <div>
            <label htmlFor="text" className="block text-sm font-medium mb-1">
              userName
            </label>
            <input
              type="text"
              id="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <a href="#" className="text-blue-600 mt-4 block text-sm">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Login;
