import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const cities = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang"];

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "username minimum 3 characters")
      .max(20, "username maximum 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username only can alphabet, number, and underscore",
      ),

    email: z.email("Email format is not valid"),

    password: z
      .string()
      .min(8, "minimum password is 8 character")
      .regex(/[a-zA-Z]/, "Password must contain at least 1 alphabet")
      .regex(/[0-9]/, "Password must contain at least 1 number"),

    confirmPassword: z.string().min(1, "confirm password must be filled"),

    birthDate: z
      .string()
      .min(1, "you must fill birth date")
      .refine((date) => {
        const birth = new Date(`${date}T00:00:00`);

        if (Number.isNaN(birth.getTime())) return false;

        const today = new Date();
        const comparison = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate(),
        );

        return birth <= comparison;
      }, "you must be 18+"),

    city: z
      .string()
      .min(1, "city must be choose")
      .refine(
        (data) => cities.some((city) => city === data),
        "invalid city selection",
      ),

    terms: z
      .boolean()
      .refine((check) => check === true, "you must agree terms and conditions"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Password is not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof registerSchema>;

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <main className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full">
        <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-6 dark:bg-neutral-800 dark:border-neutral-700">
          <h1 className="text-slate-900 text-center text-2xl font-bold dark:text-slate-50">
            Create an account
          </h1>

          <form className="space-y-6 mt-10" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-white"
              >
                Username
              </label>

              <input
                id="username"
                placeholder="Username"
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                {...register("username")}
              />

              {errors.username && (
                <p className="text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Email
              </label>
              <input
                placeholder="w0w0@1ball.com"
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute bottom-2 right-2 text-white"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="••••••••"
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                  {...register("confirmPassword")}
                />

                <button
                  type="button"
                  className="absolute bottom-2 right-2 text-white"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Birth Date
              </label>
              <input
                id="birthDate"
                type="date"
                {...register("birthDate")}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
              />
              {errors.birthDate && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.birthDate.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                City
              </label>
              <select
                id="city"
                {...register("city")}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
              >
                <option value="">Choose city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {errors.city && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="tmc"
                  type="checkbox"
                  className="sr-only"
                  {...register("terms")}
                />
                {/* Custom box */}
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600
                              bg-white dark:bg-neutral-700
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600"
                  aria-hidden="true"
                >
                  {/* Checkmark */}
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                  I accept the
                </span>
              </label>

              <a
                href="#"
                className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Terms and Conditions
              </a>

              {errors.terms && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.terms.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Create an account
            </button>
          </form>

          <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
