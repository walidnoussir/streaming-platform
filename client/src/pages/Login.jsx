import Hero from "../ui/Hero";
import LoginForm from "../ui/LoginForm";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center md:flex-row dark:bg-slate-900 dark:text-white">
      <Hero />
      <LoginForm />
    </div>
  );
}

export default Login;
