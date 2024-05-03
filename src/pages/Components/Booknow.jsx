import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { createAppointment } from "../../features/actions/bookNow";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAllSubjects } from "../../features/actions/subject";
import { clearAppointment } from "../../features/slices/bookNow";




const Booknow = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { appointmentData, isLoading } = useSelector((state) => state.appointment)
  const { subjectData } = useSelector((state) => state.subject)

  const { register, handleSubmit, formState: { errors }, control, } = useForm()

  useEffect(() => {
    dispatch(getAllSubjects())

  }, [getAllSubjects])

  useEffect(() => {
    if (appointmentData?.status) {
      navigate("/")
    }
  }, [appointmentData]);

  useEffect(() => {

    return () => {
      dispatch(clearAppointment())
    }
  }, [])



  const onSubmit = data => {
    console.log("data", data)
    const { name, email, date, subject, message, phoneNumber } = data;
    const subjectValue = subject ? subject.value : '';
    const postData = {
      name,
      email,
      phoneNumber,
      date,
      subject: subjectValue,
      message

    };
    dispatch(createAppointment(postData))
  }


  return (
    <>
      <div class="py-6 min-h-[90dvh] w-[80%] container mx-auto  grid place-items-center">
        <div class="grid grid-cols-2 h-full w-full ">

          <div className="relative h-full ">
            <img className="h-full w-full absolute" src="https://source.unsplash.com/Mv9hjnEUHR4/400x600" alt="" srcset="" />
          </div>
          <div class="w-full h-full  rounded-lg bg-white p-5  lg:rounded-l-none ">
            <h3 class="py-4 text-center text-2xl text-gray-800 ">
              Book Your Pet's Appointment
            </h3>
            <form class="rounded bg-white  " onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-4">
                <div class="mb-4 md:mb-0 ">
                  <label
                    class="mb-2 block text-sm font-bold text-gray-700 "
                    for="firstName"
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    {...register("name", { required: "name is required" })}
                    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none 
                    "
                    id="firstName"
                    type="text"
                    placeholder=" Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">
                      Name is required
                    </span>
                  )}
                </div>
              </div>

              <div class="mb-4">
                <label
                  class="mb-2 block text-sm font-bold text-gray-700 
                  "
                  for="email"
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  {...register("email", { required: "email is required" })}
                  class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none 
                  "
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500">
                    Email is required
                  </span>
                )}
              </div>
              <div class="mb-4">
                <label
                  class="mb-2 block text-sm font-bold text-gray-700 
                  "
                  for="email"
                >
                  {" "}
                  Phone Number {" "}
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "Phonenumber is required",
                    minLength: { value: 10, message: "Phone number must be exactly 10 digits" },
                    maxLength: { value: 10, message: "Phone number must be exactly 10 digits" },
                  })}
                  class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none 
                  "
                  id="number"
                  type="Number"
                  placeholder="Enter Your Number"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              <div class="mb-4">
                <label
                  class="mb-2 block text-sm font-bold text-gray-700 
                  "
                  for="email"
                >
                  {" "}
                  Subject{" "}
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
              <div class="mb-4">
                <label
                  class="mb-2 block text-sm font-bold text-gray-700 
                  "
                  for="email"
                >
                  {" "}
                  Date{" "}
                </label>
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => {
                        field.onChange(date);

                      }}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Choose Date"
                      autoComplete="off"
                      calendarClassName="text-red-500"
                      className="focus:shadow-outline me-[200px] sm:me-[350px]  mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none 
                      "

                    />

                  )}
                  rules={{ required: true }}

                />
                {errors?.date && (
                  <span className="text-red-500">
                    Date is required
                  </span>
                )}
              </div>

              <div class="mb-4">
                <label class="mb-2 block text-sm font-bold text-gray-700 
                ">
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                  {...register("message", { required: "message is required" })}
                  id="message"
                  rows="4"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 
                  "
                  placeholder="Write your thoughts here..."
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">
                    Message is required
                  </span>
                )}
              </div>

              <div class="mb-6 text-center">
                <button
                  class="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"

                >
                  {isLoading ? (
                    <ClipLoader color="#c4c2c2" />
                  ) : (<>Book Now</>)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booknow;
