import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import Select from 'react-select'
import { getAllSubjects } from "../../../features/actions/subject";
import { clearcontactUs } from "../../../features/slices/contactUs";
import { createContactUs } from "../../../features/actions/contactUs";





const Contactus = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contactUsData, isLoading } = useSelector((state) => state.contactUs)
  const { subjectData } = useSelector((state) => state.subject)

  const { register, handleSubmit, formState: { errors }, control, } = useForm()

  useEffect(() => {
    dispatch(getAllSubjects())

  }, [getAllSubjects])

  useEffect(() => {
    if (contactUsData?.status) {
      navigate("/")
    }
  }, [contactUsData]);

  useEffect(() => {

    return () => {
      dispatch(clearcontactUs())
    }
  }, [])

  const onSubmit = data => {
    console.log("data", data)
    const { name, email, subject, message, ...rest } = data;
    const subjectValue = subject ? subject.value : '';
    const postData = {
      name,
      email,
      subject: subjectValue,
      message,
      ...rest

    };
    dispatch(createContactUs(postData))
  }

  return (
    <>
      <section className="bg-white ">

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} class="space-y-8">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Your name"

              />
              {errors.name && (
                <span className="text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>

              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@.com"

              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 
                "
              >
                Number
              </label>

              <input
                {...register("number", {
                  required: { value: true, message: 'Number is required' },
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Invalid mobile number'
                  },



                })}
                type="number"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "


              />
              {errors.number && (
                <span className="text-red-500">
                  {errors.number.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <Controller
                control={control}
                name="subject"
                render={({ field, fieldState: { error } }) => (
                  <Select
                    value={field.value}
                    options={subjectData.map(subject => ({ value: subject?._id, label: subject.subject }))}
                    onChange={(selectedOption) => field.onChange(selectedOption)}
                    className="mt-2 text-sm shadow"
                    placeholder="Choose Subject "

                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: '1px solid #CBD5E1', // Set custom border style

                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: '#9CA3AF', // Set custom placeholder color
                      }),
                    }}

                  />
                )}
                rules={{ required: true }}

              />
              {errors?.subject && (
                <span className="text-red-500">
                  Subject is required
                </span>
              )}
            </div>
            <div className="sm:col-span-2">

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>

              <textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."

              ></textarea>
              {errors.message && (
                <span className="text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button

              class="py-3 px-5 text-sm font-medium text-center bg-[#1E40AF] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Send Message</>)}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contactus;
