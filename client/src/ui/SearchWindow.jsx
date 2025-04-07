function SearchWindow() {
  return (
    <div className="fixed w-screen top-18 left-0 bg-white border border-gray-200 rounded-lg md:w-[48rem] md:left-90 md:top-16 z-50 dark:bg-slate-900 dark:border-slate-950">
      <ul className="divide-y divide-slate-100 dark:divide-slate-950">
        <li className="flex items-start gap-4 px-4 py-3">
          <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center">
            <h4 className="text-base text-slate-700 dark:text-slate-50">
              Faster Development
            </h4>
          </div>
        </li>
        <li className="flex items-start gap-4 px-4 py-3">
          <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center">
            <h4 className="text-base text-slate-700 dark:text-slate-50">
              Mobile-First Approach
            </h4>
          </div>
        </li>
        <li className="flex items-start gap-4 px-4 py-3">
          <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center">
            <h4 className="text-base text-slate-700 dark:text-slate-50">
              Customizable
            </h4>
          </div>
        </li>
        <li className="flex items-start gap-4 px-4 py-3">
          <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center">
            <h4 className="text-base text-slate-700 dark:text-slate-50">
              Low Learning Curve
            </h4>
          </div>
        </li>
        <li className="flex items-start gap-4 px-4 py-3">
          <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center">
            <h4 className="text-base text-slate-700 dark:text-slate-50">
              Scalability
            </h4>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SearchWindow;
