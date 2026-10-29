
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/UI/input";
import Button from "../components/UI/button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!email.trim() || !password) {
            setMessage("Please enter your email and password.");
            return;
        }

        setMessage(
            "Login UI is working. Authentication has not been connected yet."
        );
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <section className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-9">
                <Link to="/" className="flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                        ₹
                    </div>
                    <span className="text-xl font-bold text-gray-900">
                        ExpenseTracker
                    </span>
                </Link>

                <div className="mb-8 mt-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Sign in to manage your finances.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        type="email"
                        label="Email address"
                        name="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setMessage("");
                        }}
                        required
                    />

                    <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-semibold text-gray-700"
                            >
                                Password
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="bg-transparent px-1 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setMessage("");
                            }}
                            required
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                    </div>

                    {message && (
                        <p
                            role="status"
                            className="rounded-xl bg-blue-50 p-3 text-sm text-blue-700"
                        >
                            {message}
                        </p>
                    )}

                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Just exploring?{" "}
                    <Link
                        to="/dashboard"
                        className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                        Visit Dashboard
                    </Link>
                </p>

                <p className="mt-6 text-center text-xs leading-5 text-gray-400">
                    Demo interface only. Your credentials are not authenticated
                    or saved.
                </p>
            </section>
        </main>
    );
}

export default Login;
