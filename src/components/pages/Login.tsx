import { useForm, type FieldValue, type SubmitHandler } from "react-hook-form";

interface formValues {
    register: FieldValue
}

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit : SubmitHandler<formValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" />
      </div>
    </form>
  );
}

export default Login;
