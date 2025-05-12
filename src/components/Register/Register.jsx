import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
} from "firebase/auth";

import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import app from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        photo: "",
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const validatePassword = (password) => {
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const validLength = password.length >= 6;
        return hasUpper && hasLower && validLength;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validatePassword(form.password)) {
            return toast.error(
                "Password must include upper, lower case and 6+ characters."
            );
        }

        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );
            await updateProfile(result.user, {
                displayName: form.name,
                photoURL: form.photo,
            });
            toast.success("Registered successfully!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            toast.success("Google Sign-up successful!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <>
        <Helmet>
                    <title>Register | FindFest</title>
                    
                  </Helmet>
        <div className="flex justify-center items-center lg:min-h-screen lg:my-0 lg:mx-0 my-8 mx-4 bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="text"
                        placeholder="Photo URL"
                        onChange={(e) => setForm({ ...form, photo: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <div className="relative">
    <input
        type={showPassword ? "text" : "password"}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
        placeholder="Password"
        required
        onChange={e => setForm({ ...form, password: e.target.value })}
    />
    <span
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
    >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
</div>

                    <button
                        type="submit"
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <div className="my-4 text-center text-gray-500">or</div>
                <button
                    onClick={handleGoogle}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition duration-200"
                >
                    <FcGoogle size={24} />
                    <span>Sign up with Google</span>
                </button>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
};

export default Register;
