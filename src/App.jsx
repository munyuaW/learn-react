export default function App() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-3xl font-bold">Welcome to Learnig React</h1>
      <MyButton />
      <About />
      <Profile />

      {/* Conditional rendering */}
      <UserProfile />
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
