import { useState } from "react";
import { sculptureList } from "./data";

export default function App() {
  const greeting = "Hello, and welcome";

  const [text, setText] = useState("Welcome to React");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sculptureList.length);
  };
  const togggleDetails = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center space-y-2 mx-auto">
      <h1 className="text-3xl font-bold">Welcome to Learnig React</h1>
      <MyButton />
      <About />
      <Profile />

      {/* Conditional rendering */}
      <UserProfile />

      {/* Rendering lists */}
      <ShoppingList />

      {/* Event and state */}
      <ClickMe />

      {/* Props */}
      <Welcome text={greeting} />
      <Welcome text="Excited to be here" />

      <Greeting text="Howdy!" />

      {/* State as props */}
      <InputText text={text} handleChange={handleChange} />

      {/* Children props */}
      <Card>
        <Avatar />
      </Card>

      {/* Image carousel: State */}
      <Gallery
        index={index}
        sculptureList={sculptureList}
        handleNext={handleNext}
        toggleDetails={togggleDetails}
        showMore={showMore}
      />
    </div>
  );
}

//1. Simple component
function MyButton() {
  return (
    <button className="px-2 py-1.5 bg-cyan-500 rounded-lg text-white">
      I am a button
    </button>
  );
}

//2. Displaying data
// Using curly braces to escape back into js to embed variables from code
const myName = "Munyua";

function About() {
  return <h3 className="text-cyan-950 font-bold">My name is {myName}</h3>;
}

// profile: complex expressions inside jsx
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <div className="p-2 border border-gray-300 rounded-sm">
      <h1>{user.name}</h1>
      <img
        className={`size=[${user.imageSize}] rounded-full`}
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
      />
    </div>
  );
}

// 3. Conditional rendering

function UserProfile() {
  let content;
  let isLoggedIn = true;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return <div>{content}</div>;

  // altenative: ternary - works inside jsx
  //   <div>
  //   {isLoggedIn ? (
  //     <AdminPanel />
  //   ) : (
  //     <LoginForm />
  //   )}
  // </div>
}

const AdminPanel = () => {
  return <div>AdminPanel</div>;
};

const LoginForm = () => {
  return <div>LoginForm</div>;
};

// 4. Rendering lists
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Orange", isFruit: true, id: 2 },
  { title: "Garlic", isFruit: false, id: 3 },
  { title: "Apple", isFruit: true, id: 4 },
];

function ShoppingList() {
  const listItems = products.map((p) => (
    <li
      key={p.id}
      className={`${p.isFruit ? "text-fuchsia-500" : "text-green-900"}`}>
      {p.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

//5. responding to events and updating the screen
function ClickMe() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      className="p-2.5 size-8 flex justify-center items-center bg-cyan-300 rounded-full"
      onClick={handleClick}>
      {count}
    </button>
  );
}

// 6. Props: passing data from component to component

// Props: function parameters

// Passing args to the function component: custom HTML attributes
function Welcome(props) {
  return <h2>{props.text}</h2>;
}

// destructuring props

// props is a regular js object holding data to be passed to component
// props is always the first argument in the function signature

// the style attribute as an object
const Greeting = ({ text }) => {
  return <div style={{ color: "blue" }}>{text}</div>;
};

// 7. State as Props

const InputText = ({ text, handleChange }) => {
  return (
    <>
      <input
        className="text-sm border p-1"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p className="font-bold">{text}</p>
    </>
  );
};

// 8. The children props: passing jsx as props
function Card({ children }) {
  return <div className="p-2 border rounded-lg">{children}</div>;
}

function Avatar() {
  return (
    <img
      className="size-8 rounded-full"
      src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
      alt=""
    />
  );
}

// State: a components memory
function Gallery({
  index,
  sculptureList,
  handleNext,
  showMore,
  toggleDetails,
}) {
  let sculpture = sculptureList[index];
  return (
    <div className="max-w-2xl p-2.5">
      <button
        className="px-1.5 py-1 bg-cyan-400 text-white rounded-lg"
        onClick={handleNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button
        className="px-1.5 py-1 bg-cyan-400 text-white rounded-lg"
        onClick={toggleDetails}>
        {showMore ? "Hide details" : "Show details"}
      </button>
      <p>{showMore && sculpture.description}</p>
    </div>
  );
}
