import Button from "./Button";
import FormRow from "./FormRow";

function RegisterForm() {
  return (
    <form className="wrapper">
      <FormRow label="username">
        <input className="input" type="text" placeholder="Username" />
      </FormRow>

      <FormRow label="email">
        <input className="input" type="email" placeholder="Your Email" />
      </FormRow>

      <FormRow label="set up password">
        <input className="input" type="password" placeholder="Your Password" />
      </FormRow>

      <FormRow label="confirm password">
        <input className="input" type="password" placeholder="Your Password" />
      </FormRow>

      <Button type="login">Register</Button>

      <div className="flex justify-center items-center">
        <p>Already have an account?</p>
        <Button to="/login" type="link">
          Login
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
