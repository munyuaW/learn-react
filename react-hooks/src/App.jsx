import LogInForm from "./components/LogInForm";
import ResponsiveComponent from "./components/ResponsiveComponent";
import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";

export default function App() {
  return (
    <div>
      <StatusBar />

      <SaveButton />

      <ResponsiveComponent />

      <LogInForm />
    </div>
  );
}
