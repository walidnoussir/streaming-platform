import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCurrUser } from "../utils/api";

function Profile() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrUser,
  });

  if (isLoading) return <p>...</p>;

  return (
    <Link to={`/profile/${data._id}`}>
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-green-500 text-xl uppercase font-bold border-2 border-green-600">
        {data?.username[0]}
      </div>
    </Link>
  );
}

export default Profile;
