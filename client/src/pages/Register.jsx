import Hero from "../ui/Hero";
import RegisterForm from "../ui/RegisterForm";

function Register() {
  return (
    <div className="h-screen flex flex-col items-center md:flex-row dark:bg-slate-900 dark:text-white">
      <Hero />

      <RegisterForm />
    </div>
  );
}

export default Register;
