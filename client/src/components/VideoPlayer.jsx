function VideoPlayer() {
  return (
    <figure>
      <video
        controls
        className="aspect-video w-full h-full"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      ></video>
    </figure>
  );
}

export default VideoPlayer;
