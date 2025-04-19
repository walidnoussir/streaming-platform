import { Link } from "react-router-dom";

function Button({ children, to, disabled, type, onClick }) {
  const styles = {
    login: "login-button ",
    primary: "primary-button ",
    secondary: "secondary-button ",
    danger:
      "bg-red-500 py-2 px-4 rounded-lg text-white text-lg font-semibold hover:bg-red-600 cursor-pointer",
    link: "text-primary-600 cursor-pointer text-lg font-semibold",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
