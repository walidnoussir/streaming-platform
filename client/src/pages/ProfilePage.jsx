import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../ui/Button";
import { getCurrUser } from "../utils/api";
import Spinner from "../ui/Spinner";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import customAxios from "../utils/customAxios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrUser,
  });

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  useEffect(() => {
    if (data) {
      reset({
        username: data.username,
        email: data.email,
      });
    }
  }, [data, reset]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await customAxios.patch(`/user/update-user/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Something went wrong");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
    // console.log(data);
  };

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  const { username, email } = data;

  return (
    <div className="flex flex-col justify-around h-full py-4 px-6">
      <div className="flex items-center justify-around">
        <div className="w-38 h-38 rounded-full flex items-center justify-center text-green-500 text-8xl uppercase font-bold border-2 border-green-600">
          {username[0]}
        </div>
        <div>
          <h1 className="text-xl font-semibold dark:text-white">{username}</h1>
          <h2 className="text-lg font-semibold dark:text-white">{email}</h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-6 flex flex-col gap-4"
      >
        <FormRow label="" error={errors?.username?.message}>
          <input
            className="input"
            type="text"
            placeholder="Username"
            {...register("username", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="" error={errors?.email?.message}>
          <input
            className="input"
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="" error={errors?.password?.message}>
          <input
            className="input"
            type="password"
            placeholder="Current Password"
            {...register("password", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="" error={errors?.newPassword?.message}>
          <input
            className="input"
            type="password"
            placeholder="New Password"
            {...register("newPassword", {
              minLength: {
                value: 6,
                message: "New password must be at least 6 characters",
              },
            })}
          />
        </FormRow>

        <Button type="primary" disabled={isPending}>
          {isPending ? "Updating..." : "Update User"}
        </Button>
      </form>
    </div>
  );
}

export default ProfilePage;
