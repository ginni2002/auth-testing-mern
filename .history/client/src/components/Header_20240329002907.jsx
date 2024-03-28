import React from "react";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold">Test2002</h1>
        <ul>
          <li>Home</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
}