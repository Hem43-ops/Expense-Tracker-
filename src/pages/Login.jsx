
import { useState } from "react";
import Input from "../components/UI/input";
import Button from "../components/UI/button";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Login data:", formData);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="mb-2 text-3xl font-bold">
                    Login
                </h1>

                <p className="mb-6 text-gray-500">
                    Welcome back! Please sign in.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <Button type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
