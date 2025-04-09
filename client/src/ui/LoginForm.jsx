import Button from "./Button";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, reset, formState } = useForm();
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

      <FormRow label="confirm password" error={errors?.password?.message}>
        <input
          className="input"
          type="password"
          placeholder="Your Password"
          {...register("password", {
            required: "This filed is required",
          })}
        />
      </FormRow>

      <Button type="login">Register</Button>

      <div className="flex justify-center items-center">
        <p>Don't have an account ?</p>
        <Button to="/" type="link">
          Register
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
