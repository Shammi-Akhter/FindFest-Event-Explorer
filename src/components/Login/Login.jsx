import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import app from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
    <Helmet>
            <title>Login | FindFest</title>
            
          </Helmet>
    <div className="flex justify-center items-center lg:min-h-screen lg:my-0 lg:mx-0 my-8 mx-4 bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="my-4 text-center text-gray-500">or</div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition duration-200"
        >
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:underline">
            Register
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-gray-600">
  <Link to={`/forgot-password?email=${encodeURIComponent(email)}`} className="text-indigo-500 hover:underline">
    Forgot Password?
  </Link>
</p>


      </div>
    </div>
    </>
  );
};

export default Login;
