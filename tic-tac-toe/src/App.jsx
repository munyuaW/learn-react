import { useState } from "react";

export default function App() {
  return <Board />;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="mt-5 ml-10">
      <div className="flex">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
  );
}

function Square({ value }) {
  return (
    <button className="text-2xl font-bold border border-gray-400 flex justify-center items-center w-8 h-8">
      {value}
    </button>
  );
}
