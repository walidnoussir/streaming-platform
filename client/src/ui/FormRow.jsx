function FormRow({ children, label }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-slate-900 text-md font-semibold capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
