import { useState } from "react";

const EventRSVPForm = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    attendees: "",
    preferences: "",
    extraGuest: false,
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
      ["extraGuest"]: e.target.checked,
    });
  }

  return (
    <div className="form-wrap">
      <h1>Event RSVP Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="mail"
            placeholder="Your email"
            required
            value={form.mail}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="attendees">Number of Attendees:</label>
          <input
            type="number"
            id="attendees"
            placeholder="Number of Attendees"
            min={1}
            required
            value={form.attendees}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="preferences">Dietary Preferences:</label>
          <input
            type="text"
            id="preferences"
            min={1}
            placeholder="Dietary Preferences (Optional)"
            value={form.preferences}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="extraGuest">Bringing aditional guests?</label>
          <input
            type="checkbox"
            id="extraGuest"
            value={form.extraGuest}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Submit RSVP</button>
      </form>
      {submitted && (
        <div>
          <h3>RSVP Submitted!</h3>
          <ul>
            <li>Name: {form.name}</li>
            <li>Email: {form.mail}</li>
            <li>Number of attendees: {form.attendees}</li>
            <li>
              Dietary preferences:{" "}
              {form.preferences ? form.preferences : "None"}
            </li>
            <li>
              Bringing additional guests: {form.extraGuest ? "Yes" : "No"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventRSVPForm;
