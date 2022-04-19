/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Home() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  
  const updateInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    const formData = new URLSearchParams(); // submit the form lie search params using POST
    formData.append("g", "VaQchW");
    formData.append(
      "$fields",
      "$source,$email,$consent_method,$consent_form_id,$consent_form_version"
    );
    formData.append("$list_fields", "");
    formData.append("$source", "Wellspring");
    formData.append("$email", email);
    formData.append("$consent_method", "Klaviyo Form");
    formData.append("$consent_form_id", "WcqgBb");

    fetch(`https://a.klaviyo.com/ajax/subscriptions/subscribe`, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSubscribed(true);
      })
      .catch((error) => {
        console.log(error);
        setSubscribed(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="pt-10 hero__background sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <a
                    href="#"
                    className="inline-flex items-center text-white badge__container rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide badge__text1 rounded-full">
                      Beta Coming Soon:
                    </span>
                    <span className="ml-4 text-sm text-black">
                      Request Access
                    </span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Attribution</span>
                    <span className="block hero__text2">you can trust</span>
                  </h1>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Increase your marketing signal and spend your budget more
                    efficiently with Wellspring.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    {subscribed ? (
                      <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-md text-sm font-semibold tracking-wide uppercase tracking-wider">
                        <span>Thank you for subscribing!</span>
                      </div>
                    ) : (
                      <form
                        onSubmit={submit}
                        className="sm:max-w-xl sm:mx-auto lg:mx-0"
                      >
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                              type="email"
                              placeholder="Enter your email"
                              onChange={updateInput}
                              required
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              disabled={loading}
                              className="block w-full py-3 px-4 rounded-md shadow btn__container"
                            >
                              Sign Up For Early Access
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Sign up for early access. By providing your email, you
                          agree to our{" "}
                          <a href="/terms" className="font-medium text-white">
                            terms and service
                          </a>
                          .
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
