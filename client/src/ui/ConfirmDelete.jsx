import { useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios from "../utils/customAxios";
import { toast } from "react-hot-toast";
import { useModalContext } from "./Modal";
import Button from "./Button";

function ConfirmDelete({ item, type }) {
  const { close } = useModalContext();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (type === "history") {
        await customAxios.delete(`/videos/delete-video/${item._id}`);
      } else if (type === "saved") {
        await customAxios.delete(`/saved/delete-video/${item._id}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [type === "history" ? "history" : "savedVideos"],
      });
      toast.success("Video deleted successfully");
      close();
    },
    onError: () => {
      toast.error("Could not delete this video");
    },
  });

  return (
    <div className="w-full flex items-center flex-col gap-4 py-2">
      <h1 className="text-center text-xl font-bold dark:text-white">
        {type === "history" ? "Delete from history" : "Delete from saved"}
      </h1>
      <p className="text-slate-600 text-center font-medium dark:text-slate-200">
        Are you sure you want to delete this video permanently? This action
        cannot be undone.
      </p>
      <div className="w-full flex items-center justify-end gap-5">
        <Button type="secondary" onClick={close}>
          cancel
        </Button>
        <Button type="danger" onClick={() => deleteMutation.mutate()}>
          delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
