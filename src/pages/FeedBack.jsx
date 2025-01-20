import { useFormData } from 'herotofu-react';
import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../context/AppContext';

const FeedBack = () => {
  const { token } = useContext(AppContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [rating, setRating] = useState(0);
  const [isLoggedIn] = useState(!!token);
  const { getFormSubmitHandler } = useFormData('https://public.herotofu.com/v1/3e3a9280-a411-11ef-a809-4585d752e421');

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      toast.error('Please log in to submit your feedback');
      return;
    }

    const phone = e.target.phone.value;
    const email = e.target.email.value;

    if (!validatePhone(phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    if (!email.trim()) {
      toast.error('Email is required');
      return;
    }

    setPhoneError('');
    const submitHandler = getFormSubmitHandler();
    await submitHandler(e);
    setIsSubmitted(true);
    toast.success('Feedback submitted successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 px-4">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600">Your feedback has been successfully sent. We value your input!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-6 bg-white rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            We Value Your Feedback
          </h2>

          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="focus:outline-none focus:ring focus:ring-blue-200 w-full px-4 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded-md"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring focus:ring-blue-200 w-full px-4 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded-md"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone number"
              name="phone"
              onChange={() => setPhoneError('')}
              className={`focus:outline-none focus:ring focus:ring-blue-200 w-full px-4 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded-md ${
                phoneError ? 'border-red-500' : ''
              }`}
              required
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>

          {/* Suggestions Input */}
          <div className="mb-4">
            <textarea
              placeholder="Your suggestions"
              name="suggestions"
              className="focus:outline-none focus:ring focus:ring-blue-200 w-full px-4 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded-md"
              required
            />
          </div>

          {/* Ratings Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Rate Us
            </label>
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="ratings"
                    value={value}
                    className="hidden"
                    onChange={() => setRating(value)}
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={rating >= value ? 'gold' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-8 text-yellow-500 transform translate-y-[-2px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.294 7.034a1 1 0 00.95.69h7.084c.969 0 1.371 1.24.588 1.81l-5.748 4.18a1 1 0 00-.364 1.118l2.293 7.035c.3.921-.755 1.688-1.54 1.118l-5.748-4.181a1 1 0 00-1.176 0l-5.748 4.181c-.785.57-1.84-.197-1.54-1.118l2.293-7.035a1 1 0 00-.364-1.118l-5.748-4.18c-.783-.57-.381-1.81.588-1.81h7.084a1 1 0 00.95-.69l2.294-7.035z"
                    />
                  </svg>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              className="w-full active:bg-primary hover:shadow-lg focus:outline-none px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-primary rounded-md"
              type="submit"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedBack;
