import { useState } from "react";

export default function App() {
  return <Board />;
}

function Board() {
  return (
    <div className="mt-5 ml-10">
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button
      className="text-2xl font-bold border border-gray-400 flex justify-center items-center w-8 h-8"
      onClick={handleClick}>
      {value}
    </button>
  );
}
