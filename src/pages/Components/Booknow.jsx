import { useEffect, useState } from "react";
import { PawPrint, ChevronDown } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { getAllSubjects } from "../../features/actions/subject";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../features/actions/bookNow";
import { useNavigate } from "react-router-dom";
import { clearAppointment } from "../../features/slices/bookNow";

export default function Booknow() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subjectData } = useSelector((state) => state.subject);
  const { appointmentData } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading to true when submission starts
    console.log("data", data);
    const { name, email, date, subject, message, phoneNumber } = data;
    const subjectValue = subject ? subject.value : "";
    const postData = {
      name,
      email,
      phoneNumber,
      date,
      subject,
      message,
    };

    try {
      await dispatch(createAppointment(postData)); // Assume dispatch returns a promise
      // Handle success logic here (e.g., show success message)
    } catch (error) {
      console.error("Error creating appointment:", error);
      // Handle error logic here (e.g., show error message)
    } finally {
      setIsLoading(false); // Set loading to false once submission is complete
    }
  };
  useEffect(() => {
    if (appointmentData?.status) {
      navigate("/");
    }
  }, [appointmentData]);
  useEffect(() => {
    return () => {
      dispatch(clearAppointment())
    }
  }, [])
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Your Pet's Appointment</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-blue-600" />
            Appointment Details
          </h2>
          <p className="text-sm text-gray-600 mt-1">Fill in the details to schedule your pet's visit</p>
        </div>
        <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid md:grid-cols-2 gap-4 ">
            {/* Pet's Name */}
            <div className="md:col-span-2">
              <label htmlFor="pet-name" className="block text-sm font-medium text-gray-700 mb-1">
                Pet's Name
              </label>
              <input
                type="text"
                id="pet-name"
                name="pet-name"
                {...register('name', {
                  required: 'Pet name is required',
                  minLength: { value: 2, message: 'Pet name must be at least 2 characters' },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your pet's name"
              />
              {errors.petName && (
                <span className="text-red-500 text-sm">{errors.petName.message}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service
              </label>
              <div className="relative">
                <Controller
                  name="subject"
                  control={control}
                  rules={{ required: 'Please select a service' }}
                  render={({ field }) => (
                    <select
                      id="service"
                      name="service"
                      {...field}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="">Select service</option>
                      {subjectData?.map((item) => (
                        <option value={item?._id} key={item?.subject}>
                          {item?.subject}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {errors.subject && (
                <span className="text-red-500 text-sm">{errors.subject.message}</span>
              )}
            </div>

            {/* Appointment Date */}
            <div>
              <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Date
              </label>
              <input
                type="date"
                id="appointment-date"
                name="appointment-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                {...register('date', {
                  required: 'Appointment date is required',
                  validate: (value) =>
                    value >= new Date().toISOString().split('T')[0] || 'Date must be today or in the future',
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.date && (
                <span className="text-red-500 text-sm">{errors.date.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                {...register('phoneNumber', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits',
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
              )}
            </div>

            {/* Additional Notes */}
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                {...register('message', { required: 'Additional notes are optional' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any special requirements or concerns?"
              />
              {errors.notes && (
                <span className="text-red-500 text-sm">{errors.notes.message}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isLoading} // Disable button while loading
              className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              {isLoading ? (
                <span>Loading...</span> // Show loading text or spinner
              ) : (
                'Book Appointment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
