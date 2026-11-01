import LogInForm from "./components/LogInForm";
import ResponsiveComponent from "./components/ResponsiveComponent";
import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";
import Users from "./components/Users";

export default function App() {
  return (
    <div>
      <h1>Custom Hooks</h1>

      <h2>1. useOnlineStatus</h2>
      <StatusBar />
      <SaveButton />
      <hr />

      <h2>2. useWindowSize</h2>
      <ResponsiveComponent />
      <hr />

      <h2>3. useForm</h2>
      <LogInForm />
      <hr />

      <h2>4. useFetch</h2>
      <Users />
    </div>
  );
}
