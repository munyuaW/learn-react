import * as React from "react";

const ControlledForm = () => {
  //   const [email, setEmail] = React.useState("");
  //   const [pwd, setPwd] = React.useState("");
  //   const [username, setUsername] = React.useState("");

  //   function handleEmail(e) {
  //     setEmail(e.target.value);
  //   }

  //   function handlePwd(e) {
  //     setPwd(e.target.value);
  //   }

  //   function handleUsername(e) {
  //     setUsername(e.target.value);
  //   }

  //   Handling multiple form fields
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    pwd: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", form.username);
    console.log("Email:", form.email);
    console.log("Password", form.pwd);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          id="pwd"
          name="password"
          value={form.pwd}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
