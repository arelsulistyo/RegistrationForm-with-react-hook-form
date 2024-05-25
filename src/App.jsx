import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const cur_password = watch("Password");

  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <section>
        <h1>Sign Up</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <label htmlFor="username">
              Username <span className="red">*</span>
            </label>
            <input
              type="text"
              {...register("Username", { required: true })}
              className={errors.Username ? "input-error" : ""}
            />
            {errors.Username && (
              <span className="error-message">Username is required</span>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="email">
              Email <span className="red">*</span>
            </label>
            <input
              type="text"
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className={errors.Email ? "input-error" : ""}
            />
            {errors.Email && (
              <span className="error-message">Valid email is required</span>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="phone-number">
              Phone Number <span className="red">*</span>
            </label>
            <input
              type="tel"
              inputMode="numeric"
              {...register("Phone Number", {
                required: true,
                pattern: /^[0-9]*$/,
              })}
              className={errors["Phone Number"] ? "input-error" : ""}
            />
            {errors["Phone Number"] && (
              <span className="error-message">
                Valid Phone number is required
              </span>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="password">
              Password <span className="red">*</span>
            </label>
            <input
              type="password"
              {...register("Password", { required: true })}
              className={errors.Password ? "input-error" : ""}
            />
            {errors.Password && (
              <span className="error-message">Password is required</span>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="password">Re-enter Password</label>
            <input
              type="password"
              {...register("Confirm Password", {
                required: true,
                validate: (value) =>
                  value === cur_password || "Passwords do not match",
              })}
              className={errors["Confirm Password"] ? "input-error" : ""}
            />
            {errors["Confirm Password"] && (
              <span className="error-message">
                {errors["Confirm Password"].message}
              </span>
            )}
          </div>

          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
