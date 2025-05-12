import { useState, useEffect } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useLocation } from 'react-router';
import { toast } from 'react-hot-toast';
import app from '../../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';

const auth = getAuth(app);

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const location = useLocation();


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailParam = params.get('email');
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [location]);

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address.');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent!');
            setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
            }, 500);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>Forget Password | FindFest</title>
            </Helmet>
            <div className="flex justify-center items-center lg:min-h-screen lg:my-0 lg:mx-0 my-8 mx-4 bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Reset Password</h2>
                    <form onSubmit={handleReset} className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-xl transition duration-200"
                        >
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
