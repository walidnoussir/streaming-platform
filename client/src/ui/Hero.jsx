import StreamingSvg from "../assets/undraw_video-streaming_cckz.svg";

function Hero() {
  return (
    <div className="w-[50%] h-[40%] md:h-[50%]">
      <img
        src={StreamingSvg}
        alt="Video streaming illustration"
        className="w-full h-full"
      />
    </div>
  );
}

export default Hero;
