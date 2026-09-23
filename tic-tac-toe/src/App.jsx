import { useState } from "react";

export default function App() {
  return <Board />;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {};
  return (
    <div className="mt-5 ml-10">
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button
      className="text-2xl font-bold border border-gray-400 flex justify-center items-center w-8 h-8"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}
