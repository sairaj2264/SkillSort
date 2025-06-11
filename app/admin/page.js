"use client";

import { useState } from "react";

export default function AdminPortal() {
  const [selectedOption, setSelectedOption] = useState("");
  const [bestUsers, setBestUsers] = useState([]);

  const options = [
    { id: "fullstack", label: "Fullstack" },
    { id: "devops", label: "DevOps" },
    { id: "ml", label: "ML" },
  ];

  const handleGetBestUsers = async () => {
    try {
      const response = await fetch(`/api/bestusers?domain=${selectedOption}`);
      if (!response.ok) {
        throw new Error("Failed to fetch best users");
      }
      const data = await response.json();
      console.log(data);
      setBestUsers(data);
    } catch (error) {
      console.error("Error fetching best users:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Portal</h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to the Admin Portal
        </p>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`w-64 px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                selectedOption === option.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="mt-6">
            <p className="text-gray-600 mb-4">
              Selected:{" "}
              {options.find((opt) => opt.id === selectedOption)?.label}
            </p>
            <button
              onClick={handleGetBestUsers}
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
            >
              Get Best Users
            </button>
          </div>
        )}

        {bestUsers.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Top Performers
            </h2>
            <div className="grid gap-4">
              {bestUsers.map((user, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {user.user.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Score:{" "}
                        <span className="font-medium text-indigo-600">
                          {user.score}
                        </span>
                      </p>
                    </div>
                    <a
                      href={user.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Resume
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
