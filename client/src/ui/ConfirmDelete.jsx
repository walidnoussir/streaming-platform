import Button from "./Button";

function ConfirmDelete() {
  return (
    <div className="w-[20rem] flex flex-col gap-4 py-2">
      <h1 className="text-center text-xl font-bold">Delete history</h1>
      <p className="text-slate-600 font-medium">
        Are you sure you want to delete this booking permanently? This action
        cannot be undone.
      </p>
      <div className="w-full flex items-center justify-end gap-5">
        <Button type="secondary">cancel</Button>
        <Button type="danger" onClick={() => console.log("click")}>
          delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
