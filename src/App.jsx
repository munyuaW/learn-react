export default function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Welcome to Learnig React</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button className="px-2 py-1.5 bg-cyan-500 rounded-lg text-white mt-2">
      I am a button
    </button>
  );
}
