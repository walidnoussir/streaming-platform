function FormRow({ children, label, error }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-slate-900 text-md font-semibold capitalize dark:text-white">
        {label}
      </label>
      {children}
      <p className="text-red text-xs">{error}</p>
    </div>
  );
}

export default FormRow;
