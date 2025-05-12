import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | FindFest</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-10 text-black">
        <h1 className="text-3xl text-orange-400  font-bold mb-4">Terms & Conditions</h1>
        <p className="mb-4">
          By using [Your Fest Name]’s platform or attending our events, you agree to the following terms.
        </p>
        <p className="mb-4">
          <strong>Participation:</strong> All participants must register using valid information. Misuse may result in disqualification.
        </p>
        <p className="mb-4">
          <strong>Content:</strong> Content shared on our platform must be appropriate and not violate any laws.
        </p>
        <p className="mb-4">
          <strong>Liability:</strong> We are not responsible for any losses incurred during fest participation or platform use.
        </p>
        <p>
          We may update these terms at any time. Continued use signifies your agreement to the latest version.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
