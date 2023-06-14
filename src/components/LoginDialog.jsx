import { XMarkIcon } from "@heroicons/react/24/outline";
import useStore from "../stores/store";

function LoginDialog() {
  const showLoginDialog = useStore((state) => state.showLoginDialog);
  const toggleLoginDialog = useStore((state) => state.toggleLoginDialog);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Login does not work, yet.");
  }
  return (
    <>
      {showLoginDialog && (
        <div className="absolute top-14 right-0 m-4 p-8 pt-10 rounded-md bg-amber-50/90 backdrop-blur-sm">
          <button
            onClick={toggleLoginDialog}
            className="absolute top-2 right-2 rounded-full border border-amber-900/60 p-1 bg-amber-100 hover:bg-amber-700 hover:text-amber-50"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
          <h2 className="text-lg">Login to blog about your journey</h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder="jane@example.com"
                className="rounded-md bg-amber-100 p-2 border border-amber-900/60"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="rounded-md bg-amber-100 p-2 border border-amber-900/60"
              />
            </div>

            <button
              type="sumbit"
              className="rounded-md border p-1 bg-amber-500 hover:bg-amber-700 hover:text-amber-50"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginDialog;
