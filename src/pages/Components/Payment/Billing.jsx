import React from "react";

const Billing = () => {
  return (
    <>

      <div className="container mx-auto w-[30rem] p-10">
        <div class="flex flex-col w-full gap-4 p-4 border rounded-lg">
          <div class="flex flex-col gap-2">

            <div class="text-sm font-medium text-gray-500 ">
              Payment method
            </div>

            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 bg-white rounded-full border border-gray-200 "
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 bg-white rounded-full border border-gray-200 "
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>

          <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 bg-gray-100 h-[1px] w-full border-t"
          ></div>
          <div class="flex flex-col gap-2">
            <div class="text-sm font-medium">Cash on  delivery</div>
            <div class="text-sm text-gray-500 ">
              Pay with cash when your order arrives
            </div>
            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Select
            </button>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 bg-gray-100 h-[1px] w-full border-t"
          ></div>
          <div class="flex flex-col gap-2">
            <div class="text-sm font-medium">Online payment</div>
            <div class="text-sm text-gray-500 ">
              Pay securely with your credit card or upi
            </div>
            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Select
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Billing;
