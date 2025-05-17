import toast from "react-hot-toast";
import Button from "./Button";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import customAxios from "../utils/customAxios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await customAxios.post("/auth/login", { email, password });
      toast.success("User logged in successfully");
      navigate("/home");
    } catch (err) {
      toast.error("Login failed", err.message);
      console.log(err);
    }

    reset();
  };

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

      <FormRow label="Password" error={errors?.password?.message}>
        <input
          className="input"
          type="password"
          placeholder="Your Password"
          {...register("password", {
            required: "This filed is required",
          })}
        />
      </FormRow>

      <Button type="login">Login</Button>

      <div className="flex justify-center items-center">
        <p>Don't have an account ?</p>
        <Button to="/register" type="link">
          Register
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
