import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
  confirmpassword: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data.email);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-max-md shadow-lg bg-blue-50 mx-auto p-8 flex flex-col gap-4">
      <h1 className="text-center font-bold text-lg">Register</h1>
      {/* email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-email">Email</label>
        <input
          {...register("email", {
            required: "the email field is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "the email format is wrong",
            },
          })}
          id="formIpt-email"
          className="bg-white p-2 rounded-lg border border-blue-100"
        />
        {errors.email && (
          <p className="text-red-600 text-sm italic">{errors.email?.message}</p>
        )}
      </div>

      {/* password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-password">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "the password field is required",
            minLength: {
              value: 8,
              message: "the minimum password length is 8",
            },
          })}
          placeholder="password"
          id="formIpt-password"
          className="bg-white p-2 rounded-lg border border-blue-100"
        />
        {errors.password && (
          <p className="text-red-600 text-sm italic">
            {errors.password?.message}
          </p>
        )}
      </div>

      {/* comfirm password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-confirm password">Confirm Password</label>
        <input
          type="password"
          {...register("confirmpassword", {
            required: "the password field is required",
            minLength: {
              value: 8,
              message: "the minimum password length is 8",
            },
            validate: (value) =>
              value == watch("password") || "the passwords do not match",
          })}
          placeholder="confir mpassword"
          id="formIpt-confirm   password"
          className="bg-white p-2 rounded-lg border border-blue-100"
        />
        {errors.confirmpassword && (
          <p className="text-red-600 text-sm italic">
            {errors.confirmpassword?.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full p-2 rounded-full bg-blue-700 text-blue-100 font-semibold">
        Submit
      </button>
    </form>
  );
}
