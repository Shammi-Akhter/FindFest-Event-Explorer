import { useContext, useState } from 'react';

import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');

    const handleUpdate = async () => {
        try {
            const auth = getAuth();
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });
            toast.success("Profile updated!");
            window.location.reload();
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>My Profile | FindFest</title>
                <meta name="description" content="Welcome to the homepage" />
            </Helmet>
            <div className="p-4 max-w-md lg:mx-auto mx-4 my-10 bg-blue-100  rounded-3xl">
                <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <p><strong>Email:</strong> {user.email}</p>
                <div className="mt-4">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="input w-full" placeholder="Name" />
                    <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} className="input w-full mt-2" placeholder="Photo URL" />
                    <button onClick={handleUpdate} className="btn bg-amber-500 text-white mt-2">Save</button>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
