function VideoPlayer({ item }) {
  return (
    <figure>
      <video
        className="h-60 w-full"
        src={item.video_files[0].link}
        controls
      ></video>
    </figure>
  );
}

export default VideoPlayer;
