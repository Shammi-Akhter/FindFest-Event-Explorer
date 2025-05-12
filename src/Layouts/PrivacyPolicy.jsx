import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FindFest</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-10 text-black">
        <h1 className="text-3xl text-orange-400 font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you interact with [Your Fest Name].
        </p>
        <p className="mb-4">
          <strong>Information We Collect:</strong> Name, email, institution, and other details you provide during registration.
        </p>
        <p className="mb-4">
          <strong>How We Use It:</strong> To manage registrations, provide updates, and improve our services.
        </p>
        <p className="mb-4">
          <strong>Data Sharing:</strong> We don’t sell or share your data with third parties, except when legally required.
        </p>
        <p>
          By using our services, you consent to this policy. If you have questions, contact us at support@[yourdomain].com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
