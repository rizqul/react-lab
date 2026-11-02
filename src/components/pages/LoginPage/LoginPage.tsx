import { isAxiosError } from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { loginSuccess } from "../../../features/authSlice";
import { startLoading, stopLoading } from "../../../features/uiSlice";
import { login } from "../../../services/auth.services";
import type { AppDispatch, RootState } from "../../../store/store";
import LoginForm, { type LoginFormValues } from "../../organisms/LoginForm/LoginForm";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.ui.globalLoading);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string>();

  const handleSubmit = async (values: LoginFormValues) => {
    setError(undefined);
    dispatch(startLoading());

    try {
      const response = await login(values);
      dispatch(loginSuccess(response));

      const destination = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/dashboard";

      navigate(destination, { replace: true });
    } catch (requestError) {
      setError(isAxiosError(requestError) ? (requestError.response?.data?.message ?? "Tidak dapat masuk. Silahkan periksa kembali data Anda!") : "Tidak dapat masuk. Silahkan ulangi kembali.");
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <section className="w-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <h1 className="text-2xl font-bold text-slate-900">Login</h1>
      <p className="mt-2 text-sm text-slate-600">Selamat datang di Enigmacamp!</p>
      <div className="mt-8">
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
      </div>
    </section>
  );
}

export default LoginPage;
