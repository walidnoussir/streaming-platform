import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <a
        href="#"
        className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
      >
        <img
          src="https://i.pravatar.cc/48?img=1"
          alt="user name"
          title="username"
          width="48"
          height="48"
          className="max-w-full border-2 border-primary-500 rounded-full"
        />
      </a>
    </>
  );
}

export default Profile;
