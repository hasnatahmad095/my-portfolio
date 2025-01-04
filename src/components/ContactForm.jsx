import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzzpzrjv");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      id="contact-form"
      className="h-auto sm:min-h-screen pb-36 sm:pb-48  px-4 md:px-32 font-primary lg:px-44 grid grid-cols-1 lg:grid-cols-12 gap-8"
    >
      <div className="col-span-full lg:col-span-7 text-neutralLight text-center lg:text-left mb-16 lg:mb-0">
        <h6 className="tracking-[.4rem] mb-4 lg:mb-8 font-bold">Contact</h6>
        <h2 className="text-[60px] leading-[60px] xsm:text-[80px] xsm:leading-[80px] md:text-[100px] md:leading-[100px] lg:text-[100px] lg:leading-[100px] 2xl:text-[120px] 2xl:leading-[120px] w-full 2xl:w-[70%] ">
          Let's Bring Your Ideas to Life
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="col-span-full lg:col-span-5">
        <div className="mb-12">
          <label htmlFor="name" className="block text-neutralLight mb-0">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-transparent text-neutralLight border-b border-neutralLight font-secondry focus:outline-none focus:border-b-2 focus:border-secondaryAccent"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-600 mt-2"
          />
        </div>
        <div className="mb-12">
          <label htmlFor="email" className="block text-neutralLight mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-transparent text-neutralLight border-b border-neutralLight font-secondry focus:outline-none focus:border-b-2 focus:border-secondaryAccent"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-600 mt-2"
          />
        </div>
        <div className="mb-12">
          <label htmlFor="message" className="block text-neutralLight mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-transparent text-neutralLight border-b border-neutralLight font-secondry focus:outline-none focus:border-b-2 focus:border-secondaryAccent"
            rows="2"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600 mt-2"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-20">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-full border md:border-2 px-10 py-2 text-xl sm:px-12  sm:text-2xl md:px-14 md:text-3xl text-neutralLight hover:text-primaryDark border-neutralLight view-button relative overflow-hidden"
          >
            <span className="z-10 relative">
              {state.submitting ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-6 h-6 me-3 text-secondaryAccent animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </>
              ) : (
                "Submit"
              )}
            </span>
          </button>
        </div>
        {state.succeeded && (
          <div className="mt-4 text-center text-secondaryAccent text-xl">
            <p>Thank you for reaching out! I will get back to you soon.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
