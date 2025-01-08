import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-300 rounded-xl text-black p-2 mb-4">
        Hello Tailwind
      </h1>
      <Card title="Iphone 15" />
      <Card title="ihone 16" />
    </>
  );
}

export default App;
