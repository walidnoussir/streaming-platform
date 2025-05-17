import VideoList from "../components/VideoList";
import Filter from "../ui/Filter";

function Home() {
  return (
    <div className="py-4 px-3.5">
      <Filter />
      <VideoList />
    </div>
  );
}

export default Home;
