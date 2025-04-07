import Hero from "../ui/Hero";
import LoginForm from "../ui/LoginForm";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center md:flex-row">
      <Hero />
      <LoginForm />
    </div>
  );
}

export default Login;
