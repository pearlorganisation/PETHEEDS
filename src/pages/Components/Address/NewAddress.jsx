import React from "react";
import { useForm } from "react-hook-form";

const NewAddress = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="m-auto p-5">
        <div>
        <ol class="flex items-center w-[70%] mx-auto">
          
          <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <svg
                class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          </li>

          <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <svg
                class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
          </li>

          <li class="flex items-center w-fit">
            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <svg
                class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            </span>
          </li>

        </ol>
        </div>
      </div>

      <h1 className="text text-center text-lg font-medium  p-5">
        Add New Address
      </h1>
      <div className="container mx-auto w-[25rem] p-5  border  rounded-lg mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="space-y-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="recipient"
              >
                Recipient Name
              </label>
              <br />
              {errors.recipient && (
                <span className="text-red-500">This field is required</span>
              )}
              <input
                {...register("recipient", { required: true })}
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="recipient"
                placeholder="Recipient"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="address"
              >
                Address
              </label>
              <br />

              {errors.address && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("address", { required: true })}
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="address"
                placeholder="Address"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="city"
                >
                  City
                </label>
                <br />

                {errors.city && (
                  <span className="text-red-500">This field is required</span>
                )}
                <input
                  {...register("city", { required: true })}
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="city"
                  placeholder="City"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="state"
                >
                  State/Province
                </label>
                <br />
                {errors.state && (
                  <span className="text-red-500">This field is required</span>
                )}

                <input
                  {...register("state", { required: true })}
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="state"
                  placeholder="State/Province"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="postal-code"
              >
                Postal code
              </label>
              <br />
              {errors.postal && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                {...register("postal", { required: true })}
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="postal-code"
                placeholder="Postal code"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="country"
              >
                Country
              </label>
              <br />
              {errors.country && (
                <span className="text-red-500">This field is required</span>
              )}
              <input
                {...register("country", { required: true })}
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="country"
                placeholder="Country"
              />
            </div>
            <button class="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm text-[#fff] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2563EB] text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAddress;
