function VideoCardBody() {
  return (
    <div className="p-6 flex flex-col gap-2">
      <header className="flex items-center gap-2.5">
        <img
          className="w-10 h-10 rounded-full"
          src="/channel-logo.jpg"
          alt="channelLogo"
        />
        <h3 className="text-xl font-medium text-slate-700 dark:text-slate-50">
          Memories of the past
        </h3>
      </header>
      <main className="flex justify-between items-center">
        <p className="text-sm text-slate-400 dark:text-slate-100">
          {" "}
          By George, jun 3 2023
        </p>
        <span className="text-sm text-slate-400 font-medium dark:text-slate-100">
          11k views
        </span>
      </main>
    </div>
  );
}

export default VideoCardBody;
