import { useRef, useState, useEffect } from "react";
import VideoContent from "../ui/VideoContent";

function VideoDetails({ video }) {
  const videoRef = useRef(null);
  const [selectedQuality, setSelectedQuality] = useState(video.video_files[0]);

  useEffect(() => {
    setSelectedQuality(video.video_files[0]);
  }, [video]);

  const handleQualityChange = (e) => {
    const selected = video.video_files.find(
      (file) => file.link === e.target.value
    );
    if (selected) {
      setSelectedQuality(selected);

      if (videoRef.current) {
        videoRef.current.src = selected.link;
        videoRef.current.load();
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="md:w-[50%]">
      <video
        ref={videoRef}
        className="h-60 w-full"
        src={selectedQuality.link}
        controls
        autoPlay
      />

      <div className="dark:bg-dark-3 bg-white flex items-center gap-4 py-2 px-4">
        <label className="dark:text-white text-shadow-slate-900 mr-2">
          Quality:
        </label>
        <select
          onChange={handleQualityChange}
          value={selectedQuality.link}
          className="bg-black text-white border px-2 py-1 rounded"
        >
          {video.video_files.map((file, index) => (
            <option key={index} value={file.link}>
              {file.height}p
            </option>
          ))}
        </select>
      </div>

      <VideoContent video={video} />
    </div>
  );
}

export default VideoDetails;
