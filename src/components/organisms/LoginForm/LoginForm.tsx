import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";

const loginSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters."),
  password: z.string().min(4, "Password must be at least 4 characters."),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  error?: string;
  isLoading: boolean;
  onSubmit: (values: LoginFormValues) => Promise<void>;
}

function LoginForm({ error, isLoading, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField id="username" label="Username" autoComplete="username" error={errors.username?.message} {...register("username")} />
      <FormField id="password" label="Password" type="password" autoComplete="current-password" error={errors.password?.message} {...register("password")} />
      {error ? (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in…" : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
