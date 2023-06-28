import useStore from "../stores/store";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useLocation } from "wouter";
import Loading from "../components/Loading";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function Login() {
  const [login, isAuthenticated, loading, loginErr] = useStore((state) => [
    state.login,
    state.isAuthenticated,
    state.loading,
    state.loginErr,
  ]);
  const [location, setLocation] = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    isAuthenticated && setLocation("/profile");
  }, [isAuthenticated]);

  function onSubmit(data) {
    login(data.email, data.password);
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-116px)]">
          <div className="m-4 p-8 pt-10 rounded-md bg-amber-50 border shadow-md">
            <h2 className="text-lg">Login to blog about your journey</h2>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-4"
            >
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  required={true}
                  placeholder="jane@example.com"
                  className="form-input bg-white"
                />
                {errors.email && (
                  <p className="text-sm text-rose-700">
                    Enter your email to login.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 12 })}
                  placeholder="yourSuperS3curePassw0rd"
                  required={true}
                  className="form-input bg-white"
                />
                {errors.password && (
                  <p className="text-sm text-rose-700">
                    Enter your password to login.
                  </p>
                )}
              </div>
              {loginErr && (
                <div className="flex flex-row items-center gap-1 p-1 text-rose-700">
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  <span>{loginErr}</span>
                </div>
              )}
              <button
                type="sumbit"
                disabled={loading}
                className="btn-primary p-1"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
