import * as React from "react";

const ControlledForm = () => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePwd(e) {
    setPwd(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password", pwd);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={pwd}
          onChange={handlePwd}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
