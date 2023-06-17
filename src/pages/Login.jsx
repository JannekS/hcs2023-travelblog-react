import useStore from "../stores/store";
import { useState } from "react";
import supabase from "../utils/supabaseClient";
import { useLocation } from "wouter";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useLocation();

  async function handleLogin(event) {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    data.user && setLocation("/profile");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-4 p-8 pt-10 rounded-md bg-amber-50/90 backdrop-blur-sm">
        <h2 className="text-lg">Login to blog about your journey</h2>
        <form
          action=""
          onSubmit={handleLogin}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="rounded-md bg-amber-100 p-2 focus:ring-cyan-700 focus:border-cyan-700 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md bg-amber-100 p-2 focus:ring-cyan-700 focus:border-cyan-700 focus:ring-1"
            />
          </div>

          <button
            type="sumbit"
            className="rounded-md border p-1 bg-cyan-600 border-cyan-700 hover:bg-cyan-700 hover:text-amber-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
