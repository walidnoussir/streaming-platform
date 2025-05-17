function VideoInfo({ item }) {
  return (
    <div className="flex justify-between px-2.5 py-2">
      <h3 className="text-lg font-medium text-slate-700 dark:text-slate-50">
        {item.videoOwner}
      </h3>

      <span className="text-sm text-slate-400 font-medium dark:text-slate-100">
        {item.duration} second
      </span>
    </div>
  );
}

export default VideoInfo;
