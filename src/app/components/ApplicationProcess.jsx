import React from 'react';

function ApplicationProcess() {
  return (
    <div className="container mx-auto px-4 py-6 text-xl bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Easy Application Process</h2>
      <p className="text-center text-gray-700 mb-12">Start your journey with Swift in four simple steps</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">1</div>
          <h3 className="text-lg font-bold mb-2">Sign Up</h3>
          <p>Complete basic registration with your details</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">2</div>
          <h3 className="text-lg font-bold mb-2">Upload Documents</h3>
          <p>Provide required documentation and verifications</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">3</div>
          <h3 className="text-lg font-bold mb-2">Vehicle Check</h3>
          <p>Complete vehicle inspection and registration</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">4</div>
          <h3 className="text-lg font-bold mb-2">Start Earning</h3>
          <p>Complete training and begin your journey</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href='/joinus' className="bg-black text-white px-8 py-3  rounded-full hover:bg-gray-800">Start Your Application</a>
      </div>
    </div>
  );
}

export default ApplicationProcess;