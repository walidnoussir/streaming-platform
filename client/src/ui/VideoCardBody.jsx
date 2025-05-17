function VideoCardBody({ item }) {
  return (
    <div className="p-6 flex flex-col gap-2">
      <header className="flex justify-between items-center gap-2.5">
        <h3 className="text-xl font-medium text-slate-700 dark:text-slate-50">
          {item.user.name}
        </h3>
        <span>{item.duration} s</span>
      </header>
    </div>
  );
}

export default VideoCardBody;
