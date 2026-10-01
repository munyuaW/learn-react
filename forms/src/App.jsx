import ControlledForm from "./ControlledForm";
import EventRSVPForm from "./EventRSVPForm";
import SuperheroForm from "./SuperheroForm";
import UncontrolledForm from "./UncontrolledForm";

export default function App() {
  return (
    <div>
      <h1>Working with Forms</h1>

      <h3>1. Controlled Forms</h3>
      <ControlledForm />

      <h3>2. Uncontrolled Form</h3>
      <UncontrolledForm />

      <SuperheroForm />

      <EventRSVPForm />
    </div>
  );
}
