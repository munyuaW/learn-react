import * as React from "react";

const UncontrolledForm = () => {
  const usernameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input id="username" type="text" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
