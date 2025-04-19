import { useForm } from "react-hook-form";

import Button from "./Button";
import FormRow from "./FormRow";

function RegisterForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);

    reset();
  }

  return (
    <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="username" error={errors?.username?.message}>
        <input
          className="input"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "This filed is required",
          })}
        />
      </FormRow>

      <FormRow label="email" error={errors?.email?.message}>
        <input
          className="input"
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "This filed is required",
          })}
        />
      </FormRow>

      <FormRow label="set up password" error={errors?.password?.message}>
        <input
          className="input"
          type="password"
          placeholder="Your Password"
          {...register("password", {
            required: "This filed is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="confirm password"
        error={errors?.confirmedPassword?.message}
      >
        <input
          className="input"
          type="password"
          placeholder="Your Password"
          {...register("confirmedPassword", {
            required: "This filed is required",
            validate: (value) =>
              value === getValues().password ||
              "Confirmation password is incorrect",
          })}
        />
      </FormRow>

      <Button type="login">Register</Button>

      <div className="flex justify-center items-center">
        <p>Already have an account?</p>
        <Button to="/" type="link">
          Login
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
