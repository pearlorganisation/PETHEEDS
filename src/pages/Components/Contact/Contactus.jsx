import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { getAllSubjects } from "../../../features/actions/subject";
import { clearcontactUs } from "../../../features/slices/contactUs";
import { createContactUs } from "../../../features/actions/contactUs";
import { PawPrint, ChevronDown } from 'lucide-react';

const Contactus = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contactUsData, isLoading } = useSelector((state) => state.contactUs);

  const { register, control, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  useEffect(() => {
    if (contactUsData?.status) {
      navigate("/");
    }
  }, [contactUsData, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearcontactUs());
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(createContactUs(data));
  };
  const { subjectData } = useSelector((state) => state.subject);
  const { appointmentData } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center  gap-12 items-center pt-7 px-4">
        {/* Left Side - Contact Info */}
        <div className="bg-transparent p-8 rounded-lg w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Email, call, or complete the form to learn how we can help solve your issue.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email: </span>
            <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
              petheedsllp@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone: </span>
            <a href="tel:96501 85800" className="text-blue-600 hover:underline">
              +91 96501 85800
            </a>
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address: </span>
            <p className="text-blue-600 hover:underline">
              Petheeds LLP at B-223, Eldeco Sidcul Industrial Park, Sitarganj,
              Uttarakhand 262405
            </p>
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Support</h3>
            <p className="text-gray-600 mb-4">
              Our team is available around the clock to address any concerns or queries you may
              have.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">You can reach us anytime.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                  First Name
                </label>
                <input
                  {...register("name", { required: "First name is required" })}
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Doe"
                />
              </div>
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="number">
                Phone Number
              </label>
              <input
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                type="text"
                id="number"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+62 123 456"
              />
              {errors.number && (
                <span className="text-red-500 text-sm">{errors.number.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                How Can We Help?
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                rows="5"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLoading ? <ClipLoader color="#fff" size={24} /> : "Submit"}
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              By contacting us, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
