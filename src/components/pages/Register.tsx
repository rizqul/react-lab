import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import IptPassword from "../input/Password";

// Username (3-20 char, alfanumerik + underscore)
// Email
// Password (min 8, minimal 1 angka, 1 huruf)
// Confirm password (harus match)
// Tanggal lahir (18+ tahun)
// Kota (dropdown 5 kota)
// Terms (checkbox wajib)

const citys = ["jakarta", "bandung", "bogor", "lombok"];

const regitserSchema = z
  .object({
    username: z
      .string()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Z0-9_]+$/, "only letters, numbers and underscores"),
    email: z.email("the email format is wrong").min(8),
    password: z
      .string()
      .min(8, "the minimum password length is 8")
      .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "minimum 1 number 1 letter"),
    confirmpassword: z.string(),
    dateBirth: z.date().refine((date) => {
      const now = new Date();
      now.setFullYear(now.getFullYear() - 18);
      return date <= now;
    }, "minimum age 18 years"),
    city: z.enum(citys),
    terms: z.literal(true, "Terms and conditions must be agreed to"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "password does not match",
    path: ["confirmpassword"],
  });

type IFormInput = z.infer<typeof regitserSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(regitserSchema) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data.email);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-md shadow-lg bg-blue-50 mx-auto p-8 flex flex-col gap-4 mt-8">
      <h1 className="text-center font-bold text-lg">Register</h1>
      {/* usernmae */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-username">Username</label>
        <input
          {...register("username")}
          id="formIpt-username"
          className="bg-white p-2 rounded-lg border border-blue-100"
        />
        {errors.username && (
          <p className="text-red-600 text-sm italic">
            {errors.username?.message}
          </p>
        )}
      </div>
      {/* email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-email">Email</label>
        <input
          {...register("email")}
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
        <IptPassword
          {...register("password")}
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
        <label htmlFor="formIpt-confirmpassword">Confirm Password</label>
        <IptPassword
          {...register("confirmpassword")}
          placeholder="confir mpassword"
          id="formIpt-confirmpassword"
          className="bg-white p-2 rounded-lg border border-blue-100"
        />
        {errors.confirmpassword && (
          <p className="text-red-600 text-sm italic">
            {errors.confirmpassword?.message}
          </p>
        )}
      </div>

      {/* dateBirth */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-dateBirth">Date of Birth</label>
        <input
          {...register("dateBirth", {
            valueAsDate: true,
          })}
          id="formIpt-dateBirth"
          type="date"
          className="bg-white p-2 rounded-lg border border-blue-100"
        />
        {errors.dateBirth && (
          <p className="text-red-600 text-sm italic">
            {errors.dateBirth?.message}
          </p>
        )}
      </div>

      {/* city */}
      <div className="flex flex-col gap-2">
        <label htmlFor="formIpt-city">City</label>
        <select
          id="formIpt-city"
          className="bg-white p-2 rounded-lg border border-blue-100"
          {...register("city")}>
          <option value="0" disabled>
            -- select a city --
          </option>
          {citys.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="text-red-600 text-sm italic">{errors.city?.message}</p>
        )}
      </div>

      {/* terms */}
      <div className="flex flex-row gap-2">
        <input type="checkbox" id="formIpt-terms" {...register("terms")} />
        <label htmlFor="formIpt-terms">Term</label>
        {errors.terms && (
          <p className="text-red-600 text-sm italic">{errors.terms?.message}</p>
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
