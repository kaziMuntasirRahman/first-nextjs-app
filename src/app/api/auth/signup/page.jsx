'use client'
import { useState } from "react";

const SignupPage = () => {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" })

  const handleSignup = async (e) => {
    e.preventDefault()
    console.log(newUser);

    const response = await fetch('http://localhost:3000/api/auth/signup/new-user',
      {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'content-type': 'application/json'
        }
      }
    )

    console.log(response);
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-md font-sans">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Signup Page</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
